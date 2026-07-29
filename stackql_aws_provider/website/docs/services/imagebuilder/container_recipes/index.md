--- 
title: container_recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - container_recipes
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

Creates, updates, deletes, gets or lists a <code>container_recipes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_recipes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.container_recipes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_recipe"
    values={[
        { label: 'get_container_recipe', value: 'get_container_recipe' },
        { label: 'list_container_recipes', value: 'list_container_recipes' }
    ]}
>
<TabItem value="get_container_recipe">

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
    <td><CopyableCode code="container_recipe" /></td>
    <td><code>object</code></td>
    <td>The container recipe object that is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_references" /></td>
    <td><code>object</code></td>
    <td>The resource ARNs with different wildcard variations of semantic versioning.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_container_recipes">

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
    <td>The name of the container recipe. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container recipe. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of container, such as "Docker". (DOCKER)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date when this container recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_image" /></td>
    <td><code>string</code></td>
    <td>The base image for a container build and test instance. This can contain an AMI ID or it can specify an Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by ssm:, followed by the parameter name or ARN. If not specified, Image Builder uses the appropriate ECS-optimized AMI as a base image.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the container recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_image" /></td>
    <td><code>string</code></td>
    <td>The base image for the container recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The system platform for the container, such as Windows or Linux. (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags that are attached to the container recipe.</td>
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
    <td><a href="#get_container_recipe"><CopyableCode code="get_container_recipe" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-containerRecipeArn"><code>containerRecipeArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a container recipe.</td>
</tr>
<tr>
    <td><a href="#list_container_recipes"><CopyableCode code="list_container_recipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of container recipes.</td>
</tr>
<tr>
    <td><a href="#create_container_recipe"><CopyableCode code="create_container_recipe" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-containerType"><code>containerType</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-parentImage"><code>parentImage</code></a>, <a href="#parameter-targetRepository"><code>targetRepository</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.</td>
</tr>
<tr>
    <td><a href="#delete_container_recipe"><CopyableCode code="delete_container_recipe" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-containerRecipeArn"><code>containerRecipeArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a container recipe.</td>
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
<tr id="parameter-containerRecipeArn">
    <td><CopyableCode code="containerRecipeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container recipe to delete.</td>
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
    defaultValue="get_container_recipe"
    values={[
        { label: 'get_container_recipe', value: 'get_container_recipe' },
        { label: 'list_container_recipes', value: 'list_container_recipes' }
    ]}
>
<TabItem value="get_container_recipe">

Retrieves a container recipe.

```sql
SELECT
container_recipe,
latest_version_references,
request_id
FROM aws.imagebuilder.container_recipes
WHERE containerRecipeArn = '{{ containerRecipeArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_container_recipes">

Returns a list of container recipes.

```sql
SELECT
name,
arn,
container_type,
date_created,
instance_image,
owner,
parent_image,
platform,
tags
FROM aws.imagebuilder.container_recipes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_recipe"
    values={[
        { label: 'create_container_recipe', value: 'create_container_recipe' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_recipe">

Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.

```sql
INSERT INTO aws.imagebuilder.container_recipes (
containerType,
name,
description,
semanticVersion,
components,
instanceConfiguration,
dockerfileTemplateData,
dockerfileTemplateUri,
platformOverride,
imageOsVersionOverride,
parentImage,
tags,
workingDirectory,
targetRepository,
kmsKeyId,
clientToken,
region
)
SELECT 
'{{ containerType }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ semanticVersion }}' /* required */,
'{{ components }}',
'{{ instanceConfiguration }}',
'{{ dockerfileTemplateData }}',
'{{ dockerfileTemplateUri }}',
'{{ platformOverride }}',
'{{ imageOsVersionOverride }}',
'{{ parentImage }}' /* required */,
'{{ tags }}',
'{{ workingDirectory }}',
'{{ targetRepository }}' /* required */,
'{{ kmsKeyId }}',
'{{ clientToken }}' /* required */,
'{{ region }}'
RETURNING
client_token,
container_recipe_arn,
latest_version_references,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_recipes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_recipes resource.
    - name: containerType
      value: "{{ containerType }}"
      valid_values: ['DOCKER']
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
    - name: instanceConfiguration
      description: |
        Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
      value:
        image: "{{ image }}"
        blockDeviceMappings:
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
    - name: dockerfileTemplateData
      value: "{{ dockerfileTemplateData }}"
    - name: dockerfileTemplateUri
      value: "{{ dockerfileTemplateUri }}"
    - name: platformOverride
      value: "{{ platformOverride }}"
      valid_values: ['Windows', 'Linux', 'macOS']
    - name: imageOsVersionOverride
      value: "{{ imageOsVersionOverride }}"
    - name: parentImage
      value: "{{ parentImage }}"
    - name: tags
      value: "{{ tags }}"
    - name: workingDirectory
      value: "{{ workingDirectory }}"
    - name: targetRepository
      description: |
        The container repository where the output container image is stored.
      value:
        service: "{{ service }}"
        repositoryName: "{{ repositoryName }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_recipe"
    values={[
        { label: 'delete_container_recipe', value: 'delete_container_recipe' }
    ]}
>
<TabItem value="delete_container_recipe">

Deletes a container recipe.

```sql
DELETE FROM aws.imagebuilder.container_recipes
WHERE containerRecipeArn = '{{ containerRecipeArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
