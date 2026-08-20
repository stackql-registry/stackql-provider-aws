--- 
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_filter"
    values={[
        { label: 'get_filter', value: 'get_filter' },
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="get_filter">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Specifies the action that is to be applied to the findings that match the filter. (NOOP, ARCHIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the filter was created. This field is not available for filters that were created before the lifecycle metadata feature was enabled (legacy filters).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_criteria" /></td>
    <td><code>object</code></td>
    <td>Contains information about the criteria used for querying findings.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="rank" /></td>
    <td><code>integer</code></td>
    <td>Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the filter resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the filter was last updated. For legacy filters, this field is present only after the filter has been updated at least once since the lifecycle metadata feature was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the filter. Every time the filter is updated, the version increments by 1. This field is not available for legacy filters that were created before the lifecycle metadata feature was enabled.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_filters">

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
    <td><CopyableCode code="filter_name" /></td>
    <td><code>string</code></td>
    <td>A list of filter names.</td>
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
    <td><a href="#get_filter"><CopyableCode code="get_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-filter_name"><code>filter_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of the filter specified by the filter name.</td>
</tr>
<tr>
    <td><a href="#list_filters"><CopyableCode code="list_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a paginated list of the current filters.</td>
</tr>
<tr>
    <td><a href="#create_filter"><CopyableCode code="create_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FindingCriteria"><code>FindingCriteria</code></a></td>
    <td></td>
    <td>Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty.</td>
</tr>
<tr>
    <td><a href="#update_filter"><CopyableCode code="update_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-filter_name"><code>filter_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the filter specified by the filter name.</td>
</tr>
<tr>
    <td><a href="#delete_filter"><CopyableCode code="delete_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-filter_name"><code>filter_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the filter specified by the filter name.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector that is associated with the filter. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-filter_name">
    <td><CopyableCode code="filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the filter that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_filter"
    values={[
        { label: 'get_filter', value: 'get_filter' },
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="get_filter">

Returns the details of the filter specified by the filter name.

```sql
SELECT
action,
created_at,
description,
finding_criteria,
name,
rank,
tags,
updated_at,
version
FROM aws.guardduty.filters
WHERE detector_id = '{{ detector_id }}' -- required
AND filter_name = '{{ filter_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_filters">

Returns a paginated list of the current filters.

```sql
SELECT
filter_name
FROM aws.guardduty.filters
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_filter"
    values={[
        { label: 'create_filter', value: 'create_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_filter">

Creates a filter using the specified finding criteria. The maximum number of saved filters per Amazon Web Services account per Region is 100. For more information, see Quotas for GuardDuty.

```sql
INSERT INTO aws.guardduty.filters (
Name,
Description,
Action,
Rank,
FindingCriteria,
ClientToken,
Tags,
detector_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Action }}',
{{ Rank }},
'{{ FindingCriteria }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ detector_id }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: filters
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the filters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the filters resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Action
      value: "{{ Action }}"
      valid_values: ['NOOP', 'ARCHIVE']
    - name: Rank
      value: {{ Rank }}
    - name: FindingCriteria
      description: |
        Contains information about the criteria used for querying findings.
      value:
        Criterion: "{{ Criterion }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_filter"
    values={[
        { label: 'update_filter', value: 'update_filter' }
    ]}
>
<TabItem value="update_filter">

Updates the filter specified by the filter name.

```sql
UPDATE aws.guardduty.filters
SET 
Description = '{{ Description }}',
Action = '{{ Action }}',
Rank = {{ Rank }},
FindingCriteria = '{{ FindingCriteria }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND filter_name = '{{ filter_name }}' --required
AND region = '{{ region }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_filter"
    values={[
        { label: 'delete_filter', value: 'delete_filter' }
    ]}
>
<TabItem value="delete_filter">

Deletes the filter specified by the filter name.

```sql
DELETE FROM aws.guardduty.filters
WHERE detector_id = '{{ detector_id }}' --required
AND filter_name = '{{ filter_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
