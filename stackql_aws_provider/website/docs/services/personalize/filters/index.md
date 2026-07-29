--- 
title: filters
hide_title: false
hide_table_of_contents: false
keywords:
  - filters
  - personalize
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_filter"
    values={[
        { label: 'describe_filter', value: 'describe_filter' },
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="describe_filter">

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
    <td>The name of the filter. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset group to which the filter belongs. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the filter failed, the reason for its failure.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the filter. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="filter_expression" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of item interactions to filter out of recommendation results. The filter expression must follow specific format rules. For information about filter expression structure and syntax, see Filter expressions.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the filter was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the filter.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the filter. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset group to which the filter belongs. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the filter failed, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="filter_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the filter. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the filter was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the filter.</td>
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
    <td><a href="#describe_filter"><CopyableCode code="describe_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a filter's properties.</td>
</tr>
<tr>
    <td><a href="#list_filters"><CopyableCode code="list_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all filters that belong to a given dataset group.</td>
</tr>
<tr>
    <td><a href="#create_filter"><CopyableCode code="create_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a>, <a href="#parameter-filterExpression"><code>filterExpression</code></a></td>
    <td></td>
    <td>Creates a recommendation filter. For more information, see Filtering recommendations and user segments.</td>
</tr>
<tr>
    <td><a href="#delete_filter"><CopyableCode code="delete_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a filter.</td>
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
    defaultValue="describe_filter"
    values={[
        { label: 'describe_filter', value: 'describe_filter' },
        { label: 'list_filters', value: 'list_filters' }
    ]}
>
<TabItem value="describe_filter">

Describes a filter's properties.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
failure_reason,
filter_arn,
filter_expression,
last_updated_date_time,
status
FROM aws.personalize.filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_filters">

Lists all filters that belong to a given dataset group.

```sql
SELECT
name,
creation_date_time,
dataset_group_arn,
failure_reason,
filter_arn,
last_updated_date_time,
status
FROM aws.personalize.filters
WHERE region = '{{ region }}' -- required
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

Creates a recommendation filter. For more information, see Filtering recommendations and user segments.

```sql
INSERT INTO aws.personalize.filters (
name,
datasetGroupArn,
filterExpression,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ filterExpression }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
filter_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the filters resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the filter to create.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The ARN of the dataset group that the filter will belong to.
    - name: filterExpression
      value: "{{ filterExpression }}"
      description: |
        The filter expression defines which items are included or excluded from recommendations. Filter expression must follow specific format rules. For information about filter expression structure and syntax, see Filter expressions.
    - name: tags
      description: |
        A list of tags to apply to the filter.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

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

Deletes a filter.

```sql
DELETE FROM aws.personalize.filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
