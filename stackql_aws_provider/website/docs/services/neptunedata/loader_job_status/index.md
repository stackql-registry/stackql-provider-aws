--- 
title: loader_job_status
hide_title: false
hide_table_of_contents: false
keywords:
  - loader_job_status
  - neptunedata
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

Creates, updates, deletes, gets or lists a <code>loader_job_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loader_job_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.loader_job_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_loader_job_status"
    values={[
        { label: 'get_loader_job_status', value: 'get_loader_job_status' }
    ]}
>
<TabItem value="get_loader_job_status">

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
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>Status information about the load job, in a layout that could look like this:</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The HTTP response code for the request.</td>
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
    <td><a href="#get_loader_job_status"><CopyableCode code="get_loader_job_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-load_id"><code>load_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-details"><code>details</code></a>, <a href="#parameter-errors"><code>errors</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-errorsPerPage"><code>errorsPerPage</code></a></td>
    <td>Gets status information about a specified load job. Neptune keeps track of the most recent 1,024 bulk load jobs, and stores the last 10,000 error details per job. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetLoaderJobStatus IAM action in that cluster..</td>
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
<tr id="parameter-load_id">
    <td><CopyableCode code="load_id" /></td>
    <td><code>string</code></td>
    <td>The load ID of the load job to get the status of.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-details">
    <td><CopyableCode code="details" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether or not to include details beyond the overall status (TRUE or FALSE; the default is FALSE).</td>
</tr>
<tr id="parameter-errors">
    <td><CopyableCode code="errors" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating whether or not to include a list of errors encountered (TRUE or FALSE; the default is FALSE). The list of errors is paged. The page and errorsPerPage parameters allow you to page through all the errors.</td>
</tr>
<tr id="parameter-errorsPerPage">
    <td><CopyableCode code="errorsPerPage" /></td>
    <td><code>integer</code></td>
    <td>The number of errors returned in each page (a positive integer; the default is 10). Only valid when the errors parameter set to TRUE.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The error page number (a positive integer; the default is 1). Only valid when the errors parameter is set to TRUE.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_loader_job_status"
    values={[
        { label: 'get_loader_job_status', value: 'get_loader_job_status' }
    ]}
>
<TabItem value="get_loader_job_status">

Gets status information about a specified load job. Neptune keeps track of the most recent 1,024 bulk load jobs, and stores the last 10,000 error details per job. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetLoaderJobStatus IAM action in that cluster..

```sql
SELECT
payload,
status
FROM aws.neptunedata.loader_job_status
WHERE load_id = '{{ load_id }}' -- required
AND region = '{{ region }}' -- required
AND details = '{{ details }}'
AND errors = '{{ errors }}'
AND page = '{{ page }}'
AND errorsPerPage = '{{ errorsPerPage }}'
;
```
</TabItem>
</Tabs>
