--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Attributes provided for workflow execution.</td>
</tr>
<tr>
    <td><CopyableCode code="error_description" /></td>
    <td><code>string</code></td>
    <td>Workflow error messages during execution (if any).</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that represents when workflow execution last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Workflow specific execution metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that represents when workflow execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of workflow execution. (NOT_STARTED, IN_PROGRESS, COMPLETE, FAILED, SPLIT, RETRY, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the workflow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_type" /></td>
    <td><code>string</code></td>
    <td>The type of workflow. The only supported value is APPFLOW_INTEGRATION. (APPFLOW_INTEGRATION)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflows">

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List containing workflow details.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of specified workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Query to list all workflows.</td>
</tr>
<tr>
    <td><a href="#create_integration_workflow"><CopyableCode code="create_integration_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowType"><code>WorkflowType</code></a>, <a href="#parameter-IntegrationConfig"><code>IntegrationConfig</code></a>, <a href="#parameter-ObjectTypeName"><code>ObjectTypeName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified workflow and all its corresponding resources. This is an async process.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the workflow.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Get details of specified workflow.

```sql
SELECT
attributes,
error_description,
last_updated_at,
metrics,
start_date,
status,
workflow_id,
workflow_type
FROM aws.customer_profiles.workflows
WHERE domain_name = '{{ domain_name }}' -- required
AND workflow_id = '{{ workflow_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

Query to list all workflows.

```sql
SELECT
items,
next_token
FROM aws.customer_profiles.workflows
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration_workflow"
    values={[
        { label: 'create_integration_workflow', value: 'create_integration_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration_workflow">

Creates an integration workflow. An integration workflow is an async process which ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo.

```sql
INSERT INTO aws.customer_profiles.workflows (
WorkflowType,
IntegrationConfig,
ObjectTypeName,
RoleArn,
Tags,
domain_name,
region
)
SELECT 
'{{ WorkflowType }}' /* required */,
'{{ IntegrationConfig }}' /* required */,
'{{ ObjectTypeName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ domain_name }}',
'{{ region }}'
RETURNING
message,
workflow_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflows
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the workflows resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflows resource.
    - name: WorkflowType
      value: "{{ WorkflowType }}"
      valid_values: ['APPFLOW_INTEGRATION']
    - name: IntegrationConfig
      description: |
        Configuration data for integration workflow.
      value:
        AppflowIntegration:
          FlowDefinition:
            Description: "{{ Description }}"
            FlowName: "{{ FlowName }}"
            KmsArn: "{{ KmsArn }}"
            SourceFlowConfig:
              ConnectorProfileName: "{{ ConnectorProfileName }}"
              ConnectorType: "{{ ConnectorType }}"
              IncrementalPullConfig:
                DatetimeTypeFieldName: "{{ DatetimeTypeFieldName }}"
              SourceConnectorProperties:
                Marketo: "{{ Marketo }}"
                S3: "{{ S3 }}"
                Salesforce: "{{ Salesforce }}"
                ServiceNow: "{{ ServiceNow }}"
                Zendesk: "{{ Zendesk }}"
            Tasks:
              - ConnectorOperator:
                  Marketo: "{{ Marketo }}"
                  S3: "{{ S3 }}"
                  Salesforce: "{{ Salesforce }}"
                  ServiceNow: "{{ ServiceNow }}"
                  Zendesk: "{{ Zendesk }}"
                DestinationField: "{{ DestinationField }}"
                SourceFields: "{{ SourceFields }}"
                TaskProperties: "{{ TaskProperties }}"
                TaskType: "{{ TaskType }}"
            TriggerConfig:
              TriggerType: "{{ TriggerType }}"
              TriggerProperties:
                Scheduled: "{{ Scheduled }}"
          Batches:
            - StartTime: "{{ StartTime }}"
              EndTime: "{{ EndTime }}"
    - name: ObjectTypeName
      value: "{{ ObjectTypeName }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow"
    values={[
        { label: 'delete_workflow', value: 'delete_workflow' }
    ]}
>
<TabItem value="delete_workflow">

Deletes the specified workflow and all its corresponding resources. This is an async process.

```sql
DELETE FROM aws.customer_profiles.workflows
WHERE domain_name = '{{ domain_name }}' --required
AND workflow_id = '{{ workflow_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
