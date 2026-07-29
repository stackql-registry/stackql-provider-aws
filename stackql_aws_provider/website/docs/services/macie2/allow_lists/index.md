--- 
title: allow_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - allow_lists
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

Creates, updates, deletes, gets or lists an <code>allow_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allow_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.allow_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_allow_list"
    values={[
        { label: 'get_allow_list', value: 'get_allow_list' },
        { label: 'list_allow_lists', value: 'list_allow_lists' }
    ]}
>
<TabItem value="get_allow_list">

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
    <td>The unique identifier for the allow list. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the allow list. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the allow list. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):macie2:&#91;a-z1-9-&#93;&#123;9,20&#125;:\d&#123;12&#125;:allow-list\/&#91;a-z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="criteria" /></td>
    <td><code>object</code></td>
    <td>Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the allow list. (pattern: &lt;code&gt;^&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the allow list, which indicates whether Amazon Macie can access and use the list's criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the allow list.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_allow_lists">

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
    <td>The unique identifier for the allow list. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the allow list. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the allow list. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):macie2:&#91;a-z1-9-&#93;&#123;9,20&#125;:\d&#123;12&#125;:allow-list\/&#91;a-z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the allow list was created in Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the allow list. (pattern: &lt;code&gt;^&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the allow list's settings were most recently changed in Amazon Macie.</td>
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
    <td><a href="#get_allow_list"><CopyableCode code="get_allow_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the settings and status of an allow list.</td>
</tr>
<tr>
    <td><a href="#list_allow_lists"><CopyableCode code="list_allow_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a subset of information about all the allow lists for an account.</td>
</tr>
<tr>
    <td><a href="#create_allow_list"><CopyableCode code="create_allow_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-criteria"><code>criteria</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates and defines the settings for an allow list.</td>
</tr>
<tr>
    <td><a href="#update_allow_list"><CopyableCode code="update_allow_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-criteria"><code>criteria</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the settings for an allow list.</td>
</tr>
<tr>
    <td><a href="#delete_allow_list"><CopyableCode code="delete_allow_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ignoreJobChecks"><code>ignoreJobChecks</code></a></td>
    <td>Deletes an allow list.</td>
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
<tr id="parameter-ignoreJobChecks">
    <td><CopyableCode code="ignoreJobChecks" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to force deletion of the allow list, even if active classification jobs are configured to use the list. When you try to delete an allow list, Amazon Macie checks for classification jobs that use the list and have a status other than COMPLETE or CANCELLED. By default, Macie rejects your request if any jobs meet these criteria. To skip these checks and delete the list, set this value to true. To delete the list only if no active jobs are configured to use it, set this value to false.</td>
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
    defaultValue="get_allow_list"
    values={[
        { label: 'get_allow_list', value: 'get_allow_list' },
        { label: 'list_allow_lists', value: 'list_allow_lists' }
    ]}
>
<TabItem value="get_allow_list">

Retrieves the settings and status of an allow list.

```sql
SELECT
id,
name,
arn,
created_at,
criteria,
description,
status,
tags,
updated_at
FROM aws.macie2.allow_lists
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_allow_lists">

Retrieves a subset of information about all the allow lists for an account.

```sql
SELECT
id,
name,
arn,
created_at,
description,
updated_at
FROM aws.macie2.allow_lists
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_allow_list"
    values={[
        { label: 'create_allow_list', value: 'create_allow_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_allow_list">

Creates and defines the settings for an allow list.

```sql
INSERT INTO aws.macie2.allow_lists (
clientToken,
criteria,
description,
name,
tags,
region
)
SELECT 
'{{ clientToken }}' /* required */,
'{{ criteria }}' /* required */,
'{{ description }}',
'{{ name }}' /* required */,
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
- name: allow_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the allow_lists resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: criteria
      description: |
        Specifies the criteria for an allow list. The criteria must specify a regular expression (regex) or an S3 object (s3WordsList). It can't specify both.
      value:
        regex: "{{ regex }}"
        s3WordsList:
          bucketName: "{{ bucketName }}"
          objectKey: "{{ objectKey }}"
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_allow_list"
    values={[
        { label: 'update_allow_list', value: 'update_allow_list' }
    ]}
>
<TabItem value="update_allow_list">

Updates the settings for an allow list.

```sql
UPDATE aws.macie2.allow_lists
SET 
criteria = '{{ criteria }}',
description = '{{ description }}',
name = '{{ name }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND criteria = '{{ criteria }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_allow_list"
    values={[
        { label: 'delete_allow_list', value: 'delete_allow_list' }
    ]}
>
<TabItem value="delete_allow_list">

Deletes an allow list.

```sql
DELETE FROM aws.macie2.allow_lists
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND ignoreJobChecks = '{{ ignoreJobChecks }}'
;
```
</TabItem>
</Tabs>
