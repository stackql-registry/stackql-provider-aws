--- 
title: container_images
hide_title: false
hide_table_of_contents: false
keywords:
  - container_images
  - lightsail
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>container_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.container_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_images"
    values={[
        { label: 'get_container_images', value: 'get_container_images' }
    ]}
>
<TabItem value="get_container_images">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="containerImages" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe container images that are registered to the container service.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_container_images"><CopyableCode code="get_container_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the container images that are registered to your Amazon Lightsail container service. If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</td>
</tr>
<tr>
    <td><a href="#register_container_image"><CopyableCode code="register_container_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-digest"><code>digest</code></a></td>
    <td></td>
    <td>Registers a container image to your Amazon Lightsail container service. This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see Pushing and managing container images on your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_container_image"><CopyableCode code="delete_container_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a container image that is registered to your Amazon Lightsail container service.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_container_images"
    values={[
        { label: 'get_container_images', value: 'get_container_images' }
    ]}
>
<TabItem value="get_container_images">

Returns the container images that are registered to your Amazon Lightsail container service. If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.

```sql
SELECT
containerImages
FROM aws.lightsail.container_images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_container_image"
    values={[
        { label: 'register_container_image', value: 'register_container_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_container_image">

Registers a container image to your Amazon Lightsail container service. This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see Pushing and managing container images on your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.container_images (
serviceName,
label,
digest,
region
)
SELECT 
'{{ serviceName }}' /* required */,
'{{ label }}' /* required */,
'{{ digest }}' /* required */,
'{{ region }}'
RETURNING
containerImage
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_images resource.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the container service for which to register a container image.
    - name: label
      value: "{{ label }}"
      description: |
        The label for the container image when it's registered to the container service. Use a descriptive label that you can use to track the different versions of your registered container images. Use the GetContainerImages action to return the container images registered to a Lightsail container service. The label is the \`<imagelabel>\` portion of the following image name example: :container-service-1.\`<imagelabel>\`.1 If the name of your container service is mycontainerservice, and the label that you specify is mystaticwebsite, then the name of the registered container image will be :mycontainerservice.mystaticwebsite.1. The number at the end of these image name examples represents the version of the registered container image. If you push and register another container image to the same Lightsail container service, with the same label, then the version number for the new registered container image will be 2. If you push and register another container image, the version number will be 3, and so on.
    - name: digest
      value: "{{ digest }}"
      description: |
        The digest of the container image to be registered.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_image"
    values={[
        { label: 'delete_container_image', value: 'delete_container_image' }
    ]}
>
<TabItem value="delete_container_image">

Deletes a container image that is registered to your Amazon Lightsail container service.

```sql
DELETE FROM aws.lightsail.container_images
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
