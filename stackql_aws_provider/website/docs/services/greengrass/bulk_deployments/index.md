--- 
title: bulk_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_deployments
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

Creates, updates, deletes, gets or lists a <code>bulk_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.bulk_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bulk_deployments"
    values={[
        { label: 'list_bulk_deployments', value: 'list_bulk_deployments' }
    ]}
>
<TabItem value="list_bulk_deployments">

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
    <td><CopyableCode code="bulk_deployment_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the bulk deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="bulk_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the bulk deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The time, in ISO format, when the deployment was created.</td>
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
    <td><a href="#list_bulk_deployments"><CopyableCode code="list_bulk_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of bulk deployments.</td>
</tr>
<tr>
    <td><a href="#start_bulk_deployment"><CopyableCode code="start_bulk_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-InputFileUri"><code>InputFileUri</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.</td>
</tr>
<tr>
    <td><a href="#stop_bulk_deployment"><CopyableCode code="stop_bulk_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bulk_deployment_id"><code>bulk_deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.</td>
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
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_bulk_deployments"
    values={[
        { label: 'list_bulk_deployments', value: 'list_bulk_deployments' }
    ]}
>
<TabItem value="list_bulk_deployments">

Returns a list of bulk deployments.

```sql
SELECT
bulk_deployment_arn,
bulk_deployment_id,
created_at
FROM aws.greengrass.bulk_deployments
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_bulk_deployment"
    values={[
        { label: 'start_bulk_deployment', value: 'start_bulk_deployment' },
        { label: 'stop_bulk_deployment', value: 'stop_bulk_deployment' }
    ]}
>
<TabItem value="start_bulk_deployment">

Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.

```sql
EXEC aws.greengrass.bulk_deployments.start_bulk_deployment 
@region='{{ region }}' --required, 
@X-Amzn-Client-Token='{{ X-Amzn-Client-Token }}' 
@@json=
'{
"ExecutionRoleArn": "{{ ExecutionRoleArn }}", 
"InputFileUri": "{{ InputFileUri }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="stop_bulk_deployment">

Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.

```sql
EXEC aws.greengrass.bulk_deployments.stop_bulk_deployment 
@bulk_deployment_id='{{ bulk_deployment_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
