--- 
title: segment_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_definitions
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>segment_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_definition"
    values={[
        { label: 'get_segment_definition', value: 'get_segment_definition' },
        { label: 'list_segment_definitions', value: 'list_segment_definitions' }
    ]}
>
<TabItem value="get_segment_definition">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the segment definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the segment definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="segment_groups" /></td>
    <td><code>object</code></td>
    <td>Contains all groups of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_sort" /></td>
    <td><code>object</code></td>
    <td>Defines how segments should be sorted and ordered in the results.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_sql_query" /></td>
    <td><code>string</code></td>
    <td>The segment SQL query.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_type" /></td>
    <td><code>string</code></td>
    <td>The segment type. Classic : Segments created using traditional SegmentGroup structure Enhanced : Segments created using SQL queries (CLASSIC, ENHANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_segment_definitions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the segment definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_definition_arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the segment definition.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>Name of the segment definition. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="segment_type" /></td>
    <td><code>string</code></td>
    <td>The segment type. Classic : Segments created using traditional SegmentGroup structure Enhanced : Segments created using SQL queries (CLASSIC, ENHANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags belonging to the segment definition.</td>
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
    <td><a href="#get_segment_definition"><CopyableCode code="get_segment_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a segment definition from the domain.</td>
</tr>
<tr>
    <td><a href="#list_segment_definitions"><CopyableCode code="list_segment_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all segment definitions under a domain.</td>
</tr>
<tr>
    <td><a href="#create_segment_definition"><CopyableCode code="create_segment_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a></td>
    <td></td>
    <td>Creates a segment definition associated to the given domain.</td>
</tr>
<tr>
    <td><a href="#delete_segment_definition"><CopyableCode code="delete_segment_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-segment_definition_name"><code>segment_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a segment definition from the domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-segment_definition_name">
    <td><CopyableCode code="segment_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the segment definition.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment_definition"
    values={[
        { label: 'get_segment_definition', value: 'get_segment_definition' },
        { label: 'list_segment_definitions', value: 'list_segment_definitions' }
    ]}
>
<TabItem value="get_segment_definition">

Gets a segment definition from the domain.

```sql
SELECT
created_at,
description,
display_name,
segment_definition_arn,
segment_definition_name,
segment_groups,
segment_sort,
segment_sql_query,
segment_type,
tags
FROM aws.customer_profiles.segment_definitions
WHERE domain_name = '{{ domain_name }}' -- required
AND segment_definition_name = '{{ segment_definition_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_segment_definitions">

Lists all segment definitions under a domain.

```sql
SELECT
created_at,
description,
display_name,
segment_definition_arn,
segment_definition_name,
segment_type,
tags
FROM aws.customer_profiles.segment_definitions
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_segment_definition"
    values={[
        { label: 'create_segment_definition', value: 'create_segment_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_segment_definition">

Creates a segment definition associated to the given domain.

```sql
INSERT INTO aws.customer_profiles.segment_definitions (
DisplayName,
Description,
SegmentGroups,
SegmentSqlQuery,
SegmentSort,
Tags,
domain_name,
segment_definition_name,
region
)
SELECT 
'{{ DisplayName }}' /* required */,
'{{ Description }}',
'{{ SegmentGroups }}',
'{{ SegmentSqlQuery }}',
'{{ SegmentSort }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ segment_definition_name }}',
'{{ region }}'
RETURNING
created_at,
description,
display_name,
segment_definition_arn,
segment_definition_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: segment_definitions
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the segment_definitions resource.
    - name: segment_definition_name
      value: "{{ segment_definition_name }}"
      description: Required parameter for the segment_definitions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the segment_definitions resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Description
      value: "{{ Description }}"
    - name: SegmentGroups
      description: |
        Contains all groups of the segment definition.
      value:
        Groups:
          - Dimensions: "{{ Dimensions }}"
            SourceSegments: "{{ SourceSegments }}"
            SourceType: "{{ SourceType }}"
            Type: "{{ Type }}"
        Include: "{{ Include }}"
    - name: SegmentSqlQuery
      value: "{{ SegmentSqlQuery }}"
    - name: SegmentSort
      description: |
        Defines how segments should be sorted and ordered in the results.
      value:
        Attributes:
          - Name: "{{ Name }}"
            DataType: "{{ DataType }}"
            Order: "{{ Order }}"
            Type: "{{ Type }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_segment_definition"
    values={[
        { label: 'delete_segment_definition', value: 'delete_segment_definition' }
    ]}
>
<TabItem value="delete_segment_definition">

Deletes a segment definition from the domain.

```sql
DELETE FROM aws.customer_profiles.segment_definitions
WHERE domain_name = '{{ domain_name }}' --required
AND segment_definition_name = '{{ segment_definition_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
