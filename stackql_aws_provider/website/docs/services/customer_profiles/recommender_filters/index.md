--- 
title: recommender_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - recommender_filters
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

Creates, updates, deletes, gets or lists a <code>recommender_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommender_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.recommender_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recommender_filter"
    values={[
        { label: 'get_recommender_filter', value: 'get_recommender_filter' },
        { label: 'list_recommender_filters', value: 'list_recommender_filters' }
    ]}
>
<TabItem value="get_recommender_filter">

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
    <td>The timestamp of when the recommender filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recommender filter.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the recommender filter failed, provides the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_filter_expression" /></td>
    <td><code>string</code></td>
    <td>The filter expression that defines which items to include or exclude from recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender filter. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema associated with this recommender filter. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the recommender filter. (ACTIVE, PENDING, IN_PROGRESS, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recommender_filters">

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
    <td>The timestamp when the recommender filter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the recommender filter's purpose and characteristics.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the recommender filter is in a failed state, provides the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_filter_expression" /></td>
    <td><code>string</code></td>
    <td>The filter expression that defines which items to include or exclude from recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender filter. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender schema associated with this recommender filter. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current operational status of the recommender filter. (ACTIVE, PENDING, IN_PROGRESS, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_recommender_filter"><CopyableCode code="get_recommender_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_filter_name"><code>recommender_filter_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific recommender filter in a domain.</td>
</tr>
<tr>
    <td><a href="#list_recommender_filters"><CopyableCode code="list_recommender_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of recommender filters in the specified domain.</td>
</tr>
<tr>
    <td><a href="#create_recommender_filter"><CopyableCode code="create_recommender_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_filter_name"><code>recommender_filter_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecommenderFilterExpression"><code>RecommenderFilterExpression</code></a></td>
    <td></td>
    <td>Creates a recommender filter. A recommender filter specifies which items to include or exclude from recommendations.</td>
</tr>
<tr>
    <td><a href="#delete_recommender_filter"><CopyableCode code="delete_recommender_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-recommender_filter_name"><code>recommender_filter_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a recommender filter from a domain.</td>
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
<tr id="parameter-recommender_filter_name">
    <td><CopyableCode code="recommender_filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender filter to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommender filters to return in the response. The default value is 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A token received from a previous ListRecommenderFilters call to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_recommender_filter"
    values={[
        { label: 'get_recommender_filter', value: 'get_recommender_filter' },
        { label: 'list_recommender_filters', value: 'list_recommender_filters' }
    ]}
>
<TabItem value="get_recommender_filter">

Retrieves information about a specific recommender filter in a domain.

```sql
SELECT
created_at,
description,
failure_reason,
recommender_filter_expression,
recommender_filter_name,
recommender_schema_name,
status,
tags
FROM aws.customer_profiles.recommender_filters
WHERE domain_name = '{{ domain_name }}' -- required
AND recommender_filter_name = '{{ recommender_filter_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recommender_filters">

Returns a list of recommender filters in the specified domain.

```sql
SELECT
created_at,
description,
failure_reason,
recommender_filter_expression,
recommender_filter_name,
recommender_schema_name,
status,
tags
FROM aws.customer_profiles.recommender_filters
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
    defaultValue="create_recommender_filter"
    values={[
        { label: 'create_recommender_filter', value: 'create_recommender_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recommender_filter">

Creates a recommender filter. A recommender filter specifies which items to include or exclude from recommendations.

```sql
INSERT INTO aws.customer_profiles.recommender_filters (
RecommenderFilterExpression,
RecommenderSchemaName,
Description,
Tags,
domain_name,
recommender_filter_name,
region
)
SELECT 
'{{ RecommenderFilterExpression }}' /* required */,
'{{ RecommenderSchemaName }}',
'{{ Description }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ recommender_filter_name }}',
'{{ region }}'
RETURNING
recommender_filter_arn,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recommender_filters
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the recommender_filters resource.
    - name: recommender_filter_name
      value: "{{ recommender_filter_name }}"
      description: Required parameter for the recommender_filters resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recommender_filters resource.
    - name: RecommenderFilterExpression
      value: "{{ RecommenderFilterExpression }}"
    - name: RecommenderSchemaName
      value: "{{ RecommenderSchemaName }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recommender_filter"
    values={[
        { label: 'delete_recommender_filter', value: 'delete_recommender_filter' }
    ]}
>
<TabItem value="delete_recommender_filter">

Deletes a recommender filter from a domain.

```sql
DELETE FROM aws.customer_profiles.recommender_filters
WHERE domain_name = '{{ domain_name }}' --required
AND recommender_filter_name = '{{ recommender_filter_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
