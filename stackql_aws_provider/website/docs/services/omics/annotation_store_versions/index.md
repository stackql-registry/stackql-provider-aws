--- 
title: annotation_store_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - annotation_store_versions
  - omics
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

Creates, updates, deletes, gets or lists an <code>annotation_store_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="annotation_store_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.annotation_store_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_annotation_store_version"
    values={[
        { label: 'get_annotation_store_version', value: 'get_annotation_store_version' },
        { label: 'list_annotation_store_versions', value: 'list_annotation_store_versions' }
    ]}
>
<TabItem value="get_annotation_store_version">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The annotation store version ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the annotation store. (pattern: &lt;code&gt;(&#91;a-z&#93;)&#123;1&#125;(&#91;a-z0-9_&#93;)&#123;2,254&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when an annotation store version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an annotation store version. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status of an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="storeId" /></td>
    <td><code>string</code></td>
    <td>The store ID for annotation store version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Any tags associated with an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when an annotation store version was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionArn" /></td>
    <td><code>string</code></td>
    <td>The Arn for the annotation store. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>The name given to an annotation store version to distinguish it from others. (pattern: &lt;code&gt;(&#91;a-z&#93;)&#123;1&#125;(&#91;a-z0-9_&#93;)&#123;2,254&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionOptions" /></td>
    <td><code>object</code></td>
    <td>The options for an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="versionSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the annotation store version in Bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_annotation_store_versions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The annotation store version ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name given to an annotation store version to distinguish it from others. (pattern: &lt;code&gt;(&#91;a-z&#93;)&#123;1&#125;(&#91;a-z0-9_&#93;)&#123;2,254&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when an annotation store version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an annotation store version. (CREATING, UPDATING, DELETING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status of an annotation store version.</td>
</tr>
<tr>
    <td><CopyableCode code="storeId" /></td>
    <td><code>string</code></td>
    <td>The store ID for an annotation store version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when an annotation store version was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="versionArn" /></td>
    <td><code>string</code></td>
    <td>The Arn for an annotation store version. (pattern: &lt;code&gt;arn:(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>The name of an annotation store version. (pattern: &lt;code&gt;(&#91;a-z&#93;)&#123;1&#125;(&#91;a-z0-9_&#93;)&#123;2,254&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="versionSizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of an annotation store version in Bytes.</td>
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
    <td><a href="#get_annotation_store_version"><CopyableCode code="get_annotation_store_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for an annotation store version.</td>
</tr>
<tr>
    <td><a href="#list_annotation_store_versions"><CopyableCode code="list_annotation_store_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the versions of an annotation store.</td>
</tr>
<tr>
    <td><a href="#create_annotation_store_version"><CopyableCode code="create_annotation_store_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versionName"><code>versionName</code></a></td>
    <td></td>
    <td>Creates a new version of an annotation store.</td>
</tr>
<tr>
    <td><a href="#update_annotation_store_version"><CopyableCode code="update_annotation_store_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the description of an annotation store version.</td>
</tr>
<tr>
    <td><a href="#delete_annotation_store_versions"><CopyableCode code="delete_annotation_store_versions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes one or multiple versions of an annotation store.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the annotation store from which versions are being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_name">
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The name of an annotation store version.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Forces the deletion of an annotation store version when imports are in-progress..</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of annotation store versions to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specifies the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_annotation_store_version"
    values={[
        { label: 'get_annotation_store_version', value: 'get_annotation_store_version' },
        { label: 'list_annotation_store_versions', value: 'list_annotation_store_versions' }
    ]}
>
<TabItem value="get_annotation_store_version">

Retrieves the metadata for an annotation store version.

```sql
SELECT
id,
name,
creationTime,
description,
status,
statusMessage,
storeId,
tags,
updateTime,
versionArn,
versionName,
versionOptions,
versionSizeBytes
FROM aws.omics.annotation_store_versions
WHERE name = '{{ name }}' -- required
AND version_name = '{{ version_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_annotation_store_versions">

Lists the versions of an annotation store.

```sql
SELECT
id,
name,
creationTime,
description,
status,
statusMessage,
storeId,
updateTime,
versionArn,
versionName,
versionSizeBytes
FROM aws.omics.annotation_store_versions
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_annotation_store_version"
    values={[
        { label: 'create_annotation_store_version', value: 'create_annotation_store_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_annotation_store_version">

Creates a new version of an annotation store.

```sql
INSERT INTO aws.omics.annotation_store_versions (
versionName,
description,
versionOptions,
tags,
name,
region
)
SELECT 
'{{ versionName }}' /* required */,
'{{ description }}',
'{{ versionOptions }}',
'{{ tags }}',
'{{ name }}',
'{{ region }}'
RETURNING
id,
name,
creationTime,
status,
storeId,
versionName,
versionOptions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: annotation_store_versions
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the annotation_store_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the annotation_store_versions resource.
    - name: versionName
      value: "{{ versionName }}"
    - name: description
      value: "{{ description }}"
    - name: versionOptions
      description: |
        The options for an annotation store version.
      value:
        tsvVersionOptions:
          annotationType: "{{ annotationType }}"
          formatToHeader: "{{ formatToHeader }}"
          schema: "{{ schema }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_annotation_store_version"
    values={[
        { label: 'update_annotation_store_version', value: 'update_annotation_store_version' }
    ]}
>
<TabItem value="update_annotation_store_version">

Updates the description of an annotation store version.

```sql
UPDATE aws.omics.annotation_store_versions
SET 
description = '{{ description }}'
WHERE 
name = '{{ name }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
creationTime,
description,
status,
storeId,
updateTime,
versionName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_annotation_store_versions"
    values={[
        { label: 'delete_annotation_store_versions', value: 'delete_annotation_store_versions' }
    ]}
>
<TabItem value="delete_annotation_store_versions">

Deletes one or multiple versions of an annotation store.

```sql
DELETE FROM aws.omics.annotation_store_versions
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
