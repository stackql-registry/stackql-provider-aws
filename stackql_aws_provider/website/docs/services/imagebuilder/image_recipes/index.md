--- 
title: image_recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - image_recipes
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>image_recipes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_recipes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_recipes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_recipe"
    values={[
        { label: 'get_image_recipe', value: 'get_image_recipe' },
        { label: 'list_image_recipes', value: 'list_image_recipes' }
    ]}
>
<TabItem value="get_image_recipe">

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
    <td><CopyableCode code="imageRecipe" /></td>
    <td><code>object</code></td>
    <td>The image recipe object.</td>
</tr>
<tr>
    <td><CopyableCode code="latestVersionReferences" /></td>
    <td><code>object</code></td>
    <td>The resource ARNs with different wildcard variations of semantic versioning.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_image_recipes">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the image recipe. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image recipe. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string</code></td>
    <td>The date on which this image recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the image recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="parentImage" /></td>
    <td><code>string</code></td>
    <td>The base image of the image recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the image recipe. (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the image recipe.</td>
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
    <td><a href="#get_image_recipe"><CopyableCode code="get_image_recipe" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-imageRecipeArn"><code>imageRecipeArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an image recipe.</td>
</tr>
<tr>
    <td><a href="#list_image_recipes"><CopyableCode code="list_image_recipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of image recipes.</td>
</tr>
<tr>
    <td><a href="#create_image_recipe"><CopyableCode code="create_image_recipe" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-parentImage"><code>parentImage</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.</td>
</tr>
<tr>
    <td><a href="#delete_image_recipe"><CopyableCode code="delete_image_recipe" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-imageRecipeArn"><code>imageRecipeArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an image recipe.</td>
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
<tr id="parameter-imageRecipeArn">
    <td><CopyableCode code="imageRecipeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image recipe to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_image_recipe"
    values={[
        { label: 'get_image_recipe', value: 'get_image_recipe' },
        { label: 'list_image_recipes', value: 'list_image_recipes' }
    ]}
>
<TabItem value="get_image_recipe">

Gets an image recipe.

```sql
SELECT
imageRecipe,
latestVersionReferences,
requestId
FROM aws.imagebuilder.image_recipes
WHERE imageRecipeArn = '{{ imageRecipeArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_image_recipes">

Returns a list of image recipes.

```sql
SELECT
name,
arn,
dateCreated,
owner,
parentImage,
platform,
tags
FROM aws.imagebuilder.image_recipes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image_recipe"
    values={[
        { label: 'create_image_recipe', value: 'create_image_recipe' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image_recipe">

Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.

```sql
INSERT INTO aws.imagebuilder.image_recipes (
name,
description,
semanticVersion,
components,
parentImage,
blockDeviceMappings,
tags,
workingDirectory,
additionalInstanceConfiguration,
amiTags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ semanticVersion }}' /* required */,
'{{ components }}',
'{{ parentImage }}' /* required */,
'{{ blockDeviceMappings }}',
'{{ tags }}',
'{{ workingDirectory }}',
'{{ additionalInstanceConfiguration }}',
'{{ amiTags }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
clientToken,
imageRecipeArn,
latestVersionReferences,
requestId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: image_recipes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the image_recipes resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: semanticVersion
      value: "{{ semanticVersion }}"
    - name: components
      value:
        - componentArn: "{{ componentArn }}"
          parameters: "{{ parameters }}"
    - name: parentImage
      value: "{{ parentImage }}"
    - name: blockDeviceMappings
      value:
        - deviceName: "{{ deviceName }}"
          ebs:
            encrypted: {{ encrypted }}
            deleteOnTermination: {{ deleteOnTermination }}
            iops: {{ iops }}
            kmsKeyId: "{{ kmsKeyId }}"
            snapshotId: "{{ snapshotId }}"
            volumeSize: {{ volumeSize }}
            volumeType: "{{ volumeType }}"
            throughput: {{ throughput }}
          virtualName: "{{ virtualName }}"
          noDevice: "{{ noDevice }}"
    - name: tags
      value: "{{ tags }}"
    - name: workingDirectory
      value: "{{ workingDirectory }}"
    - name: additionalInstanceConfiguration
      description: |
        In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances. Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.
      value:
        systemsManagerAgent:
          uninstallAfterBuild: {{ uninstallAfterBuild }}
        userDataOverride: "{{ userDataOverride }}"
    - name: amiTags
      value: "{{ amiTags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_recipe"
    values={[
        { label: 'delete_image_recipe', value: 'delete_image_recipe' }
    ]}
>
<TabItem value="delete_image_recipe">

Deletes an image recipe.

```sql
DELETE FROM aws.imagebuilder.image_recipes
WHERE imageRecipeArn = '{{ imageRecipeArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
