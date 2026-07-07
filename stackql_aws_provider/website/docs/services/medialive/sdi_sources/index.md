--- 
title: sdi_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - sdi_sources
  - medialive
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

Creates, updates, deletes, gets or lists a <code>sdi_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sdi_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.sdi_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_sdi_source"
    values={[
        { label: 'describe_sdi_source', value: 'describe_sdi_source' },
        { label: 'list_sdi_sources', value: 'list_sdi_sources' }
    ]}
>
<TabItem value="describe_sdi_source">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Inputs" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest. (QUADRANT, INTERLEAVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the SDI source is attached to an SDI input (IN_USE) or not (IDLE). (IDLE, IN_USE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest. (SINGLE, QUAD)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sdi_sources">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="Inputs" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest. (QUADRANT, INTERLEAVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the SDI source is attached to an SDI input (IN_USE) or not (IDLE). (IDLE, IN_USE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest. (SINGLE, QUAD)</td>
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
    <td><a href="#describe_sdi_source"><CopyableCode code="describe_sdi_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sdi_source_id"><code>sdi_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a SdiSource.</td>
</tr>
<tr>
    <td><a href="#list_sdi_sources"><CopyableCode code="list_sdi_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List all the SdiSources in the AWS account.</td>
</tr>
<tr>
    <td><a href="#create_sdi_source"><CopyableCode code="create_sdi_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create an SdiSource for each video source that uses the SDI protocol. You will reference the SdiSource when you create an SDI input in MediaLive. You will also reference it in an SdiSourceMapping, in order to create a connection between the logical SdiSource and the physical SDI card and port that the physical SDI source uses.</td>
</tr>
<tr>
    <td><a href="#update_sdi_source"><CopyableCode code="update_sdi_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-sdi_source_id"><code>sdi_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Change some of the settings in an SdiSource.</td>
</tr>
<tr>
    <td><a href="#delete_sdi_source"><CopyableCode code="delete_sdi_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-sdi_source_id"><code>sdi_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an SdiSource. The SdiSource must not be part of any SidSourceMapping and must not be attached to any input.</td>
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
<tr id="parameter-sdi_source_id">
    <td><CopyableCode code="sdi_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the SdiSource.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_sdi_source"
    values={[
        { label: 'describe_sdi_source', value: 'describe_sdi_source' },
        { label: 'list_sdi_sources', value: 'list_sdi_sources' }
    ]}
>
<TabItem value="describe_sdi_source">

Gets details about a SdiSource.

```sql
SELECT
Arn,
Id,
Inputs,
Mode,
Name,
State,
Type
FROM aws.medialive.sdi_sources
WHERE sdi_source_id = '{{ sdi_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sdi_sources">

List all the SdiSources in the AWS account.

```sql
SELECT
Arn,
Id,
Inputs,
Mode,
Name,
State,
Type
FROM aws.medialive.sdi_sources
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_sdi_source"
    values={[
        { label: 'create_sdi_source', value: 'create_sdi_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_sdi_source">

Create an SdiSource for each video source that uses the SDI protocol. You will reference the SdiSource when you create an SDI input in MediaLive. You will also reference it in an SdiSourceMapping, in order to create a connection between the logical SdiSource and the physical SDI card and port that the physical SDI source uses.

```sql
INSERT INTO aws.medialive.sdi_sources (
Mode,
Name,
RequestId,
Tags,
Type,
region
)
SELECT 
'{{ Mode }}',
'{{ Name }}',
'{{ RequestId }}',
'{{ Tags }}',
'{{ Type }}',
'{{ region }}'
RETURNING
SdiSource
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sdi_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sdi_sources resource.
    - name: Mode
      value: "{{ Mode }}"
      description: |
        Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest.
      valid_values: ['QUADRANT', 'INTERLEAVE']
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
    - name: Type
      value: "{{ Type }}"
      description: |
        Used in SdiSource, CreateSdiSourceRequest, UpdateSdiSourceRequest.
      valid_values: ['SINGLE', 'QUAD']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sdi_source"
    values={[
        { label: 'update_sdi_source', value: 'update_sdi_source' }
    ]}
>
<TabItem value="update_sdi_source">

Change some of the settings in an SdiSource.

```sql
UPDATE aws.medialive.sdi_sources
SET 
Mode = '{{ Mode }}',
Name = '{{ Name }}',
Type = '{{ Type }}'
WHERE 
sdi_source_id = '{{ sdi_source_id }}' --required
AND region = '{{ region }}' --required
RETURNING
SdiSource;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sdi_source"
    values={[
        { label: 'delete_sdi_source', value: 'delete_sdi_source' }
    ]}
>
<TabItem value="delete_sdi_source">

Delete an SdiSource. The SdiSource must not be part of any SidSourceMapping and must not be attached to any input.

```sql
DELETE FROM aws.medialive.sdi_sources
WHERE sdi_source_id = '{{ sdi_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
