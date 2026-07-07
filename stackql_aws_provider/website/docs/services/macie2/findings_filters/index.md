--- 
title: findings_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_filters
  - macie2
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

Creates, updates, deletes, gets or lists a <code>findings_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.findings_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_filter"
    values={[
        { label: 'get_findings_filter', value: 'get_findings_filter' },
        { label: 'list_findings_filters', value: 'list_findings_filters' }
    ]}
>
<TabItem value="get_findings_filter">

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
    <td>The unique identifier for the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are: (ARCHIVE, NOOP)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="findingCriteria" /></td>
    <td><code>object</code></td>
    <td>Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings_filters">

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
    <td>The unique identifier for the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are: (ARCHIVE, NOOP)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the filter.</td>
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
    <td><a href="#get_findings_filter"><CopyableCode code="get_findings_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the criteria and other settings for a findings filter.</td>
</tr>
<tr>
    <td><a href="#list_findings_filters"><CopyableCode code="list_findings_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a subset of information about all the findings filters for an account.</td>
</tr>
<tr>
    <td><a href="#create_findings_filter"><CopyableCode code="create_findings_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-findingCriteria"><code>findingCriteria</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates and defines the criteria and other settings for a findings filter.</td>
</tr>
<tr>
    <td><a href="#update_findings_filter"><CopyableCode code="update_findings_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the criteria and other settings for a findings filter.</td>
</tr>
<tr>
    <td><a href="#delete_findings_filter"><CopyableCode code="delete_findings_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a findings filter.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Macie resource that the request applies to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_findings_filter"
    values={[
        { label: 'get_findings_filter', value: 'get_findings_filter' },
        { label: 'list_findings_filters', value: 'list_findings_filters' }
    ]}
>
<TabItem value="get_findings_filter">

Retrieves the criteria and other settings for a findings filter.

```sql
SELECT
id,
name,
action,
arn,
description,
findingCriteria,
position,
tags
FROM aws.macie2.findings_filters
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_findings_filters">

Retrieves a subset of information about all the findings filters for an account.

```sql
SELECT
id,
name,
action,
arn,
tags
FROM aws.macie2.findings_filters
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_findings_filter"
    values={[
        { label: 'create_findings_filter', value: 'create_findings_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_findings_filter">

Creates and defines the criteria and other settings for a findings filter.

```sql
INSERT INTO aws.macie2.findings_filters (
action,
clientToken,
description,
findingCriteria,
name,
position,
tags,
region
)
SELECT 
'{{ action }}' /* required */,
'{{ clientToken }}',
'{{ description }}',
'{{ findingCriteria }}' /* required */,
'{{ name }}' /* required */,
{{ position }},
'{{ tags }}',
'{{ region }}'
RETURNING
id,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: findings_filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the findings_filters resource.
    - name: action
      value: "{{ action }}"
      description: |
        The action to perform on findings that match the filter criteria. To suppress (automatically archive) findings that match the criteria, set this value to ARCHIVE. Valid values are:
      valid_values: ['ARCHIVE', 'NOOP']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: findingCriteria
      description: |
        Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
      value:
        criterion: "{{ criterion }}"
    - name: name
      value: "{{ name }}"
    - name: position
      value: {{ position }}
    - name: tags
      value: "{{ tags }}"
      description: |
        A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_findings_filter"
    values={[
        { label: 'update_findings_filter', value: 'update_findings_filter' }
    ]}
>
<TabItem value="update_findings_filter">

Updates the criteria and other settings for a findings filter.

```sql
UPDATE aws.macie2.findings_filters
SET 
action = '{{ action }}',
clientToken = '{{ clientToken }}',
description = '{{ description }}',
findingCriteria = '{{ findingCriteria }}',
name = '{{ name }}',
position = {{ position }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_findings_filter"
    values={[
        { label: 'delete_findings_filter', value: 'delete_findings_filter' }
    ]}
>
<TabItem value="delete_findings_filter">

Deletes a findings filter.

```sql
DELETE FROM aws.macie2.findings_filters
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
