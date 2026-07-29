--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
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

Creates, updates, deletes, gets or lists a <code>components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td><CopyableCode code="component" /></td>
    <td><code>object</code></td>
    <td>The component object specified in the request.</td>
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
<TabItem value="list_components">

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
    <td>The name of the component. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component. Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows: Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x. Version ARNs have only the first three nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code> Build version ARNs have all four nodes, and point to a specific build for a specific version of an object. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date that the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the component. (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="product_codes" /></td>
    <td><code>array</code></td>
    <td>Contains product codes that are used for billing purposes for Amazon Web Services Marketplace components.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Describes the current status of the component version. (DEPRECATED, DISABLED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_os_versions" /></td>
    <td><code>array</code></td>
    <td>he operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the component denotes whether the component is used to build the image or only to test it. (BUILD, TEST)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The semantic version of the component. The semantic version has four nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code>/<code>&lt;build&gt;</code>. You can assign values for the first three, and can filter on all of them. Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node. Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-componentBuildVersionArn"><code>componentBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a component object.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of components that can be filtered by name, or by using the listed filters to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results. The semantic version has four nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code>/<code>&lt;build&gt;</code>. You can assign values for the first three, and can filter on all of them. Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.</td>
</tr>
<tr>
    <td><a href="#create_component"><CopyableCode code="create_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-semanticVersion"><code>semanticVersion</code></a>, <a href="#parameter-platform"><code>platform</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods: Inline, using the data property in the request body. A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-componentBuildVersionArn"><code>componentBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a component build version.</td>
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
<tr id="parameter-componentBuildVersionArn">
    <td><CopyableCode code="componentBuildVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component build version to delete.</td>
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
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Gets a component object.

```sql
SELECT
component,
latest_version_references,
request_id
FROM aws.imagebuilder.components
WHERE componentBuildVersionArn = '{{ componentBuildVersionArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_components">

Returns the list of components that can be filtered by name, or by using the listed filters to streamline results. Newly created components can take up to two minutes to appear in the ListComponents API Results. The semantic version has four nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code>/<code>&lt;build&gt;</code>. You can assign values for the first three, and can filter on all of them. Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.

```sql
SELECT
name,
arn,
date_created,
description,
owner,
platform,
product_codes,
status,
supported_os_versions,
type_,
version
FROM aws.imagebuilder.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component"
    values={[
        { label: 'create_component', value: 'create_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component">

Creates a new component that can be used to build, validate, test, and assess your image. The component is based on a YAML document that you specify using exactly one of the following methods: Inline, using the data property in the request body. A URL that points to a YAML document file stored in Amazon S3, using the uri property in the request body.

```sql
INSERT INTO aws.imagebuilder.components (
name,
semanticVersion,
description,
changeDescription,
platform,
supportedOsVersions,
data,
uri,
kmsKeyId,
tags,
clientToken,
dryRun,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ semanticVersion }}' /* required */,
'{{ description }}',
'{{ changeDescription }}',
'{{ platform }}' /* required */,
'{{ supportedOsVersions }}',
'{{ data }}',
'{{ uri }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientToken }}' /* required */,
{{ dryRun }},
'{{ region }}'
RETURNING
client_token,
component_build_version_arn,
latest_version_references,
request_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the components resource.
    - name: name
      value: "{{ name }}"
    - name: semanticVersion
      value: "{{ semanticVersion }}"
    - name: description
      value: "{{ description }}"
    - name: changeDescription
      value: "{{ changeDescription }}"
    - name: platform
      value: "{{ platform }}"
      valid_values: ['Windows', 'Linux', 'macOS']
    - name: supportedOsVersions
      value:
        - "{{ supportedOsVersions }}"
    - name: data
      value: "{{ data }}"
    - name: uri
      value: "{{ uri }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: dryRun
      value: {{ dryRun }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Deletes a component build version.

```sql
DELETE FROM aws.imagebuilder.components
WHERE componentBuildVersionArn = '{{ componentBuildVersionArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
