--- 
title: software_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - software_sets
  - workspaces_thin_client
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

Creates, updates, deletes, gets or lists a <code>software_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="software_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_thin_client.software_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_software_set"
    values={[
        { label: 'get_software_set', value: 'get_software_set' },
        { label: 'list_software_sets', value: 'list_software_sets' }
    ]}
>
<TabItem value="get_software_set">

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
    <td>The ID of the software set. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the software set. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="releasedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the software set was released.</td>
</tr>
<tr>
    <td><CopyableCode code="software" /></td>
    <td><code>array</code></td>
    <td>A list of the software components in the software set.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the end of support for the software set.</td>
</tr>
<tr>
    <td><CopyableCode code="validationStatus" /></td>
    <td><code>string</code></td>
    <td>An option to define if the software set has been validated. (VALIDATED, NOT_VALIDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the software set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_software_sets">

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
    <td>The ID of the software set. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the software set. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="releasedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the software set was released.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the end of support for the software set.</td>
</tr>
<tr>
    <td><CopyableCode code="validationStatus" /></td>
    <td><code>string</code></td>
    <td>An option to define if the software set has been validated. (VALIDATED, NOT_VALIDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the software set.</td>
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
    <td><a href="#get_software_set"><CopyableCode code="get_software_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information for a software set.</td>
</tr>
<tr>
    <td><a href="#list_software_sets"><CopyableCode code="list_software_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of software sets.</td>
</tr>
<tr>
    <td><a href="#update_software_set"><CopyableCode code="update_software_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-validationStatus"><code>validationStatus</code></a></td>
    <td></td>
    <td>Updates a software set.</td>
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
    <td>The ID of the software set to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_software_set"
    values={[
        { label: 'get_software_set', value: 'get_software_set' },
        { label: 'list_software_sets', value: 'list_software_sets' }
    ]}
>
<TabItem value="get_software_set">

Returns information for a software set.

```sql
SELECT
id,
arn,
releasedAt,
software,
supportedUntil,
validationStatus,
version
FROM aws.workspaces_thin_client.software_sets
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_software_sets">

Returns a list of software sets.

```sql
SELECT
id,
arn,
releasedAt,
supportedUntil,
validationStatus,
version
FROM aws.workspaces_thin_client.software_sets
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_software_set"
    values={[
        { label: 'update_software_set', value: 'update_software_set' }
    ]}
>
<TabItem value="update_software_set">

Updates a software set.

```sql
UPDATE aws.workspaces_thin_client.software_sets
SET 
validationStatus = '{{ validationStatus }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND validationStatus = '{{ validationStatus }}' --required;
```
</TabItem>
</Tabs>
