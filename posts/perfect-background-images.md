---
pageTitle: Perfect Background Image Control
pageDescription: How to have a full page scrollable background cover image in CSS with a dimmer or color overlay blend.
date: "2020-06-12"
---

I often find myself going back to [this great CSS-Tricks article](https://css-tricks.com/perfect-full-page-background-image/)
on how to set up the perfect full page background image, but I wanted to make something a bit more useful for me for a few 
reasons: 
* It says it's been updated, but it always feels like anything with 
vendor prefixing is outdated since we usually have tools do that automatically for us if needed. 
* It's annoying to 
have to remember what each of the positional arguments of the background property is.
* Often the image 
I actually want to use as a background is too bright and I don't want to fiddle with making it darker in an image editor- 
I'd rather use CSS!
* I don't like the fixed background part of it, but it you want you can add it back into this snippet with the
[background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment) property.

So here is a little snippet that fixes these issues for me:

```css
background-image: url("/my/static/image.jpg");
background-color: rgba(0, 0, 0, 0.7);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-blend-mode: multiply;
```

and here's a mixin for it:

```scss
@mixin bgCover($imageUrl, $overlayColor) {
  background-image: url($imageUrl);
  background-color: $overlayColor;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
```
then you can use it like this:
```scss

// Adds the original image properly sized with no tint as the background image.
.my-bg-element {
  @include bg-cover("/static/images/montreal-evening.jpg");
}

// Adds the image properly sized with a dark tint as the background image.
.my-darker-bg-element {
  @include bg-cover("/static/images/montreal-evening.jpg", rgba(0, 0, 0, 0.7));
}
```
