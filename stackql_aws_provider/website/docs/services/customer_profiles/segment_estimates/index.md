--- 
title: segment_estimates
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_estimates
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

Creates, updates, deletes, gets or lists a <code>segment_estimates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_estimates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.segment_estimates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_estimate"
    values={[
        { label: 'get_segment_estimate', value: 'get_segment_estimate' }
    ]}
>
<TabItem value="get_segment_estimate">

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
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimate" /></td>
    <td><code>string</code></td>
    <td>The estimated number of profiles contained in the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="estimate_id" /></td>
    <td><code>string</code></td>
    <td>The QueryId which is the same as the value passed in QueryId.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The error message if there is any error.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the query. (RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>integer</code></td>
    <td>The status code of the segment estimate.</td>
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
    <td><a href="#get_segment_estimate"><CopyableCode code="get_segment_estimate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-estimate_id"><code>estimate_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the result of a segment estimate query.</td>
</tr>
<tr>
    <td><a href="#create_segment_estimate"><CopyableCode code="create_segment_estimate" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a segment estimate query.</td>
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
<tr id="parameter-estimate_id">
    <td><CopyableCode code="estimate_id" /></td>
    <td><code>string</code></td>
    <td>The query Id passed by a previous CreateSegmentEstimate operation.</td>
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
    defaultValue="get_segment_estimate"
    values={[
        { label: 'get_segment_estimate', value: 'get_segment_estimate' }
    ]}
>
<TabItem value="get_segment_estimate">

Gets the result of a segment estimate query.

```sql
SELECT
domain_name,
estimate,
estimate_id,
message,
status,
status_code
FROM aws.customer_profiles.segment_estimates
WHERE domain_name = '{{ domain_name }}' -- required
AND estimate_id = '{{ estimate_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_segment_estimate"
    values={[
        { label: 'create_segment_estimate', value: 'create_segment_estimate' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_segment_estimate">

Creates a segment estimate query.

```sql
INSERT INTO aws.customer_profiles.segment_estimates (
SegmentQuery,
SegmentSqlQuery,
domain_name,
region
)
SELECT 
'{{ SegmentQuery }}',
'{{ SegmentSqlQuery }}',
'{{ domain_name }}',
'{{ region }}'
RETURNING
domain_name,
estimate_id,
status_code
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: segment_estimates
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the segment_estimates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the segment_estimates resource.
    - name: SegmentQuery
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
`}</CodeBlock>

</TabItem>
</Tabs>
