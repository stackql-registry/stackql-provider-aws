--- 
title: bulk_deployment_detailed_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_deployment_detailed_reports
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>bulk_deployment_detailed_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_deployment_detailed_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.bulk_deployment_detailed_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bulk_deployment_detailed_reports"
    values={[
        { label: 'list_bulk_deployment_detailed_reports', value: 'list_bulk_deployment_detailed_reports' }
    ]}
>
<TabItem value="list_bulk_deployment_detailed_reports">

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
    <td><code>string</code></td>
    <td>The time, in ISO format, when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the group deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the group deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_type" /></td>
    <td><code>string</code></td>
    <td>The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. (NewDeployment, Redeployment, ResetDeployment, ForceResetDeployment)</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>array</code></td>
    <td>Details about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message for a failed deployment</td>
</tr>
<tr>
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Greengrass group.</td>
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
    <td><a href="#list_bulk_deployment_detailed_reports"><CopyableCode code="list_bulk_deployment_detailed_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bulk_deployment_id"><code>bulk_deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.</td>
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
<tr id="parameter-bulk_deployment_id">
    <td><CopyableCode code="bulk_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the bulk deployment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_bulk_deployment_detailed_reports"
    values={[
        { label: 'list_bulk_deployment_detailed_reports', value: 'list_bulk_deployment_detailed_reports' }
    ]}
>
<TabItem value="list_bulk_deployment_detailed_reports">

Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.

```sql
SELECT
created_at,
deployment_arn,
deployment_id,
deployment_status,
deployment_type,
error_details,
error_message,
group_arn
FROM aws.greengrass.bulk_deployment_detailed_reports
WHERE bulk_deployment_id = '{{ bulk_deployment_id }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
