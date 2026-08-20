--- 
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_space"
    values={[
        { label: 'describe_space', value: 'describe_space' },
        { label: 'search_spaces', value: 'search_spaces' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="describe_space">

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
    <td><CopyableCode code="contributors" /></td>
    <td><code>array</code></td>
    <td>A list of contributors to the space.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="space" /></td>
    <td><code>object</code></td>
    <td>The details of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="space_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the space. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_=.+&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_spaces">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="space_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of space summaries that match the search criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="space_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the space. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_=.+&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_spaces">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="space_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of space summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="space_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the space. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_=.+&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_space"><CopyableCode code="describe_space" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxContributors"><code>maxContributors</code></a></td>
    <td>Describes an Amazon QuickSight space.</td>
</tr>
<tr>
    <td><a href="#search_spaces"><CopyableCode code="search_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for Amazon QuickSight spaces that match the specified filters.</td>
</tr>
<tr>
    <td><a href="#list_spaces"><CopyableCode code="list_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all Amazon QuickSight spaces in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_space"><CopyableCode code="create_space" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SpaceId"><code>SpaceId</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a new Amazon QuickSight space. A space is a collection of resources that can be used to organize and manage QuickSight assets.</td>
</tr>
<tr>
    <td><a href="#update_space"><CopyableCode code="update_space" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the metadata of an Amazon QuickSight space.</td>
</tr>
<tr>
    <td><a href="#delete_space"><CopyableCode code="delete_space" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-space_id"><code>space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon QuickSight space.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_id">
    <td><CopyableCode code="space_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the space that you want to delete.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-maxContributors">
    <td><CopyableCode code="maxContributors" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of contributors to include in the response.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_space"
    values={[
        { label: 'describe_space', value: 'describe_space' },
        { label: 'search_spaces', value: 'search_spaces' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="describe_space">

Describes an Amazon QuickSight space.

```sql
SELECT
contributors,
request_id,
space,
space_arn,
space_id
FROM aws.quicksight.spaces
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND space_id = '{{ space_id }}' -- required
AND region = '{{ region }}' -- required
AND maxContributors = '{{ maxContributors }}'
;
```
</TabItem>
<TabItem value="search_spaces">

Searches for Amazon QuickSight spaces that match the specified filters.

```sql
SELECT
next_token,
request_id,
space_summaries,
space_arn,
space_id
FROM aws.quicksight.spaces
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_spaces">

Lists all Amazon QuickSight spaces in an Amazon Web Services account.

```sql
SELECT
next_token,
request_id,
space_summaries,
space_arn,
space_id
FROM aws.quicksight.spaces
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_space"
    values={[
        { label: 'create_space', value: 'create_space' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_space">

Creates a new Amazon QuickSight space. A space is a collection of resources that can be used to organize and manage QuickSight assets.

```sql
INSERT INTO aws.quicksight.spaces (
SpaceId,
Name,
Description,
aws_account_id,
region
)
SELECT 
'{{ SpaceId }}' /* required */,
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
request_id,
space_arn,
space_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spaces
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the spaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the spaces resource.
    - name: SpaceId
      value: "{{ SpaceId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_space"
    values={[
        { label: 'update_space', value: 'update_space' }
    ]}
>
<TabItem value="update_space">

Updates the metadata of an Amazon QuickSight space.

```sql
UPDATE aws.quicksight.spaces
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND space_id = '{{ space_id }}' --required
AND region = '{{ region }}' --required
RETURNING
request_id,
space_arn,
space_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_space"
    values={[
        { label: 'delete_space', value: 'delete_space' }
    ]}
>
<TabItem value="delete_space">

Deletes an Amazon QuickSight space.

```sql
DELETE FROM aws.quicksight.spaces
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND space_id = '{{ space_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
