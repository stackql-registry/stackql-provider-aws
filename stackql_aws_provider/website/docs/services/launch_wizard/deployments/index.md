--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - launch_wizard
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.launch_wizard.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

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
    <td>The ID of the deployment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment was deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_name" /></td>
    <td><code>string</code></td>
    <td>The pattern name of the deployment. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_group" /></td>
    <td><code>string</code></td>
    <td>The resource group of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="specifications" /></td>
    <td><code>object</code></td>
    <td>The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see SAP deployment specifications. To retrieve the specifications required to create a deployment for other workloads, use the GetWorkloadDeploymentPattern operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (COMPLETED, CREATING, DELETE_IN_PROGRESS, DELETE_INITIATING, DELETE_FAILED, DELETED, FAILED, IN_PROGRESS, VALIDATING, UPDATE_IN_PROGRESS, UPDATE_COMPLETED, UPDATE_FAILED, UPDATE_ROLLBACK_COMPLETED, UPDATE_ROLLBACK_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Information about the tags attached to a deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployments">

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
    <td>The ID of the deployment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload deployment pattern. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (COMPLETED, CREATING, DELETE_IN_PROGRESS, DELETE_INITIATING, DELETE_FAILED, DELETED, FAILED, IN_PROGRESS, VALIDATING, UPDATE_IN_PROGRESS, UPDATE_COMPLETED, UPDATE_FAILED, UPDATE_ROLLBACK_COMPLETED, UPDATE_ROLLBACK_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_deployment"><CopyableCode code="get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the deployment.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the deployments that have been created.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workloadName"><code>workloadName</code></a>, <a href="#parameter-deploymentPatternName"><code>deploymentPatternName</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-specifications"><code>specifications</code></a></td>
    <td></td>
    <td>Creates a deployment for the given workload. Deployments created by this operation are not available in the Launch Wizard console to use the Clone deployment action on.</td>
</tr>
<tr>
    <td><a href="#update_deployment"><CopyableCode code="update_deployment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentId"><code>deploymentId</code></a>, <a href="#parameter-specifications"><code>specifications</code></a></td>
    <td></td>
    <td>Updates a deployment.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a deployment.</td>
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
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

Returns information about the deployment.

```sql
SELECT
id,
name,
created_at,
deleted_at,
deployment_arn,
modified_at,
pattern_name,
resource_group,
specifications,
status,
tags,
workload_name
FROM aws.launch_wizard.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Lists the deployments that have been created.

```sql
SELECT
id,
name,
created_at,
modified_at,
pattern_name,
status,
workload_name
FROM aws.launch_wizard.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment"
    values={[
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment">

Creates a deployment for the given workload. Deployments created by this operation are not available in the Launch Wizard console to use the Clone deployment action on.

```sql
INSERT INTO aws.launch_wizard.deployments (
workloadName,
deploymentPatternName,
name,
specifications,
dryRun,
tags,
region
)
SELECT 
'{{ workloadName }}' /* required */,
'{{ deploymentPatternName }}' /* required */,
'{{ name }}' /* required */,
'{{ specifications }}' /* required */,
{{ dryRun }},
'{{ tags }}',
'{{ region }}'
RETURNING
deployment_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: workloadName
      value: "{{ workloadName }}"
    - name: deploymentPatternName
      value: "{{ deploymentPatternName }}"
    - name: name
      value: "{{ name }}"
    - name: specifications
      value: "{{ specifications }}"
    - name: dryRun
      value: {{ dryRun }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_deployment"
    values={[
        { label: 'update_deployment', value: 'update_deployment' }
    ]}
>
<TabItem value="update_deployment">

Updates a deployment.

```sql
UPDATE aws.launch_wizard.deployments
SET 
deploymentId = '{{ deploymentId }}',
specifications = '{{ specifications }}',
workloadVersionName = '{{ workloadVersionName }}',
deploymentPatternVersionName = '{{ deploymentPatternVersionName }}',
dryRun = {{ dryRun }},
force = {{ force }}
WHERE 
region = '{{ region }}' --required
AND deploymentId = '{{ deploymentId }}' --required
AND specifications = '{{ specifications }}' --required
RETURNING
deployment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment"
    values={[
        { label: 'delete_deployment', value: 'delete_deployment' }
    ]}
>
<TabItem value="delete_deployment">

Deletes a deployment.

```sql
DELETE FROM aws.launch_wizard.deployments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
