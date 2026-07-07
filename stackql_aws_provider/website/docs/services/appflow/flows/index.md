--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - appflow
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appflow.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies when the flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user who created the flow. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the flow. (pattern: &lt;code&gt;&#91;\w!@#\-.?,\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destinationFlowConfigList" /></td>
    <td><code>array</code></td>
    <td>The configuration that controls how Amazon AppFlow transfers data to the destination connector.</td>
</tr>
<tr>
    <td><CopyableCode code="flowArn" /></td>
    <td><code>string</code></td>
    <td>The flow's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws:appflow:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowName" /></td>
    <td><code>string</code></td>
    <td>The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;\w!@#.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="flowStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the current status of the flow. (Active, Deprecated, Deleted, Draft, Errored, Suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="flowStatusMessage" /></td>
    <td><code>string</code></td>
    <td>Contains an error message if the flow status is in a suspended or error state. This applies only to scheduled or event-triggered flows. (pattern: &lt;code&gt;&#91;\s\w/!@#+=.-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. (pattern: &lt;code&gt;arn:aws:kms:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunExecutionDetails" /></td>
    <td><code>object</code></td>
    <td>Describes the details of the most recent flow run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunMetadataCatalogDetails" /></td>
    <td><code>array</code></td>
    <td>Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies when the flow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the user name of the account that performed the most recent update. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataCatalogConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration: Source-to-destination field mappings Field data types Partition keys</td>
</tr>
<tr>
    <td><CopyableCode code="sourceFlowConfig" /></td>
    <td><code>object</code></td>
    <td>Contains information about the configuration of the source connector used in the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for your flow.</td>
</tr>
<tr>
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfig" /></td>
    <td><code>object</code></td>
    <td>The trigger settings that determine how and when Amazon AppFlow runs the specified flow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flows">

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
    <td><CopyableCode code="flows" /></td>
    <td><code>array</code></td>
    <td>The list of flows associated with your account.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token for next page of data. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#describe_flow"><CopyableCode code="describe_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a description of the specified flow.</td>
</tr>
<tr>
    <td><a href="#list_flows"><CopyableCode code="list_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the flows associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_flow"><CopyableCode code="create_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-flowName"><code>flowName</code></a>, <a href="#parameter-triggerConfig"><code>triggerConfig</code></a>, <a href="#parameter-sourceFlowConfig"><code>sourceFlowConfig</code></a>, <a href="#parameter-destinationFlowConfigList"><code>destinationFlowConfigList</code></a>, <a href="#parameter-tasks"><code>tasks</code></a></td>
    <td></td>
    <td>Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.</td>
</tr>
<tr>
    <td><a href="#update_flow"><CopyableCode code="update_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-flowName"><code>flowName</code></a>, <a href="#parameter-triggerConfig"><code>triggerConfig</code></a>, <a href="#parameter-sourceFlowConfig"><code>sourceFlowConfig</code></a>, <a href="#parameter-destinationFlowConfigList"><code>destinationFlowConfigList</code></a>, <a href="#parameter-tasks"><code>tasks</code></a></td>
    <td></td>
    <td>Updates an existing flow.</td>
</tr>
<tr>
    <td><a href="#delete_flow"><CopyableCode code="delete_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.</td>
</tr>
<tr>
    <td><a href="#cancel_flow_executions"><CopyableCode code="cancel_flow_executions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-flowName"><code>flowName</code></a></td>
    <td></td>
    <td>Cancels active runs for a flow. You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs. You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the StopFlow action. You cannot resume a run after you cancel it. When you send your request, the status for each run becomes CancelStarted. When the cancellation completes, the status becomes Canceled. When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing.</td>
</tr>
<tr>
    <td><a href="#start_flow"><CopyableCode code="start_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-flowName"><code>flowName</code></a></td>
    <td></td>
    <td>Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.</td>
</tr>
<tr>
    <td><a href="#stop_flow"><CopyableCode code="stop_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-flowName"><code>flowName</code></a></td>
    <td></td>
    <td>Deactivates the existing flow. For on-demand flows, this operation returns an unsupportedOperationException error message. For schedule and event-triggered flows, this operation deactivates the flow.</td>
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
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

Provides a description of the specified flow.

```sql
SELECT
createdAt,
createdBy,
description,
destinationFlowConfigList,
flowArn,
flowName,
flowStatus,
flowStatusMessage,
kmsArn,
lastRunExecutionDetails,
lastRunMetadataCatalogDetails,
lastUpdatedAt,
lastUpdatedBy,
metadataCatalogConfig,
schemaVersion,
sourceFlowConfig,
tags,
tasks,
triggerConfig
FROM aws.appflow.flows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flows">

Lists all of the flows associated with your account.

```sql
SELECT
flows,
nextToken
FROM aws.appflow.flows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow"
    values={[
        { label: 'create_flow', value: 'create_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow">

Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.

```sql
INSERT INTO aws.appflow.flows (
flowName,
description,
kmsArn,
triggerConfig,
sourceFlowConfig,
destinationFlowConfigList,
tasks,
tags,
metadataCatalogConfig,
clientToken,
region
)
SELECT 
'{{ flowName }}' /* required */,
'{{ description }}',
'{{ kmsArn }}',
'{{ triggerConfig }}' /* required */,
'{{ sourceFlowConfig }}' /* required */,
'{{ destinationFlowConfigList }}' /* required */,
'{{ tasks }}' /* required */,
'{{ tags }}',
'{{ metadataCatalogConfig }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
flowArn,
flowStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flows resource.
    - name: flowName
      value: "{{ flowName }}"
    - name: description
      value: "{{ description }}"
    - name: kmsArn
      value: "{{ kmsArn }}"
    - name: triggerConfig
      description: |
        The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
      value:
        triggerType: "{{ triggerType }}"
        triggerProperties:
          Scheduled:
            scheduleExpression: "{{ scheduleExpression }}"
            dataPullMode: "{{ dataPullMode }}"
            scheduleStartTime: "{{ scheduleStartTime }}"
            scheduleEndTime: "{{ scheduleEndTime }}"
            timezone: "{{ timezone }}"
            scheduleOffset: {{ scheduleOffset }}
            firstExecutionFrom: "{{ firstExecutionFrom }}"
            flowErrorDeactivationThreshold: {{ flowErrorDeactivationThreshold }}
    - name: sourceFlowConfig
      description: |
        Contains information about the configuration of the source connector used in the flow.
      value:
        connectorType: "{{ connectorType }}"
        apiVersion: "{{ apiVersion }}"
        connectorProfileName: "{{ connectorProfileName }}"
        sourceConnectorProperties:
          Amplitude:
            object: "{{ object }}"
          Datadog:
            object: "{{ object }}"
          Dynatrace:
            object: "{{ object }}"
          GoogleAnalytics:
            object: "{{ object }}"
          InforNexus:
            object: "{{ object }}"
          Marketo:
            object: "{{ object }}"
          S3:
            bucketName: "{{ bucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            s3InputFormatConfig:
              s3InputFileType: "{{ s3InputFileType }}"
          Salesforce:
            object: "{{ object }}"
            enableDynamicFieldUpdate: {{ enableDynamicFieldUpdate }}
            includeDeletedRecords: {{ includeDeletedRecords }}
            dataTransferApi: "{{ dataTransferApi }}"
          ServiceNow:
            object: "{{ object }}"
          Singular:
            object: "{{ object }}"
          Slack:
            object: "{{ object }}"
          Trendmicro:
            object: "{{ object }}"
          Veeva:
            object: "{{ object }}"
            documentType: "{{ documentType }}"
            includeSourceFiles: {{ includeSourceFiles }}
            includeRenditions: {{ includeRenditions }}
            includeAllVersions: {{ includeAllVersions }}
          Zendesk:
            object: "{{ object }}"
          SAPOData:
            objectPath: "{{ objectPath }}"
            parallelismConfig:
              maxParallelism: {{ maxParallelism }}
            paginationConfig:
              maxPageSize: {{ maxPageSize }}
          CustomConnector:
            entityName: "{{ entityName }}"
            customProperties: "{{ customProperties }}"
            dataTransferApi:
              Name: "{{ Name }}"
              Type: "{{ Type }}"
          Pardot:
            object: "{{ object }}"
        incrementalPullConfig:
          datetimeTypeFieldName: "{{ datetimeTypeFieldName }}"
    - name: destinationFlowConfigList
      value:
        - connectorType: "{{ connectorType }}"
          apiVersion: "{{ apiVersion }}"
          connectorProfileName: "{{ connectorProfileName }}"
          destinationConnectorProperties:
            Redshift:
              object: "{{ object }}"
              intermediateBucketName: "{{ intermediateBucketName }}"
              bucketPrefix: "{{ bucketPrefix }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
            S3:
              bucketName: "{{ bucketName }}"
              bucketPrefix: "{{ bucketPrefix }}"
              s3OutputFormatConfig:
                fileType: "{{ fileType }}"
                prefixConfig:
                  prefixType: "{{ prefixType }}"
                  prefixFormat: "{{ prefixFormat }}"
                  pathPrefixHierarchy: "{{ pathPrefixHierarchy }}"
                aggregationConfig:
                  aggregationType: "{{ aggregationType }}"
                  targetFileSize: {{ targetFileSize }}
                preserveSourceDataTyping: {{ preserveSourceDataTyping }}
            Salesforce:
              object: "{{ object }}"
              idFieldNames:
                - "{{ idFieldNames }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
              writeOperationType: "{{ writeOperationType }}"
              dataTransferApi: "{{ dataTransferApi }}"
            Snowflake:
              object: "{{ object }}"
              intermediateBucketName: "{{ intermediateBucketName }}"
              bucketPrefix: "{{ bucketPrefix }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
            EventBridge:
              object: "{{ object }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
            LookoutMetrics: "{{ LookoutMetrics }}"
            Upsolver:
              bucketName: "{{ bucketName }}"
              bucketPrefix: "{{ bucketPrefix }}"
              s3OutputFormatConfig:
                fileType: "{{ fileType }}"
                prefixConfig:
                  prefixType: "{{ prefixType }}"
                  prefixFormat: "{{ prefixFormat }}"
                  pathPrefixHierarchy: "{{ pathPrefixHierarchy }}"
                aggregationConfig:
                  aggregationType: "{{ aggregationType }}"
                  targetFileSize: {{ targetFileSize }}
            Honeycode:
              object: "{{ object }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
            CustomerProfiles:
              domainName: "{{ domainName }}"
              objectTypeName: "{{ objectTypeName }}"
            Zendesk:
              object: "{{ object }}"
              idFieldNames:
                - "{{ idFieldNames }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
              writeOperationType: "{{ writeOperationType }}"
            Marketo:
              object: "{{ object }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
            CustomConnector:
              entityName: "{{ entityName }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
              writeOperationType: "{{ writeOperationType }}"
              idFieldNames:
                - "{{ idFieldNames }}"
              customProperties: "{{ customProperties }}"
            SAPOData:
              objectPath: "{{ objectPath }}"
              successResponseHandlingConfig:
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
              idFieldNames:
                - "{{ idFieldNames }}"
              errorHandlingConfig:
                failOnFirstDestinationError: {{ failOnFirstDestinationError }}
                bucketPrefix: "{{ bucketPrefix }}"
                bucketName: "{{ bucketName }}"
              writeOperationType: "{{ writeOperationType }}"
    - name: tasks
      value:
        - sourceFields: "{{ sourceFields }}"
          connectorOperator:
            Amplitude: "{{ Amplitude }}"
            Datadog: "{{ Datadog }}"
            Dynatrace: "{{ Dynatrace }}"
            GoogleAnalytics: "{{ GoogleAnalytics }}"
            InforNexus: "{{ InforNexus }}"
            Marketo: "{{ Marketo }}"
            S3: "{{ S3 }}"
            Salesforce: "{{ Salesforce }}"
            ServiceNow: "{{ ServiceNow }}"
            Singular: "{{ Singular }}"
            Slack: "{{ Slack }}"
            Trendmicro: "{{ Trendmicro }}"
            Veeva: "{{ Veeva }}"
            Zendesk: "{{ Zendesk }}"
            SAPOData: "{{ SAPOData }}"
            CustomConnector: "{{ CustomConnector }}"
            Pardot: "{{ Pardot }}"
          destinationField: "{{ destinationField }}"
          taskType: "{{ taskType }}"
          taskProperties: "{{ taskProperties }}"
    - name: tags
      value: "{{ tags }}"
    - name: metadataCatalogConfig
      description: |
        Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
      value:
        glueDataCatalog:
          roleArn: "{{ roleArn }}"
          databaseName: "{{ databaseName }}"
          tablePrefix: "{{ tablePrefix }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flow"
    values={[
        { label: 'update_flow', value: 'update_flow' }
    ]}
>
<TabItem value="update_flow">

Updates an existing flow.

```sql
UPDATE aws.appflow.flows
SET 
flowName = '{{ flowName }}',
description = '{{ description }}',
triggerConfig = '{{ triggerConfig }}',
sourceFlowConfig = '{{ sourceFlowConfig }}',
destinationFlowConfigList = '{{ destinationFlowConfigList }}',
tasks = '{{ tasks }}',
metadataCatalogConfig = '{{ metadataCatalogConfig }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND flowName = '{{ flowName }}' --required
AND triggerConfig = '{{ triggerConfig }}' --required
AND sourceFlowConfig = '{{ sourceFlowConfig }}' --required
AND destinationFlowConfigList = '{{ destinationFlowConfigList }}' --required
AND tasks = '{{ tasks }}' --required
RETURNING
flowStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow"
    values={[
        { label: 'delete_flow', value: 'delete_flow' }
    ]}
>
<TabItem value="delete_flow">

Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.

```sql
DELETE FROM aws.appflow.flows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_flow_executions"
    values={[
        { label: 'cancel_flow_executions', value: 'cancel_flow_executions' },
        { label: 'start_flow', value: 'start_flow' },
        { label: 'stop_flow', value: 'stop_flow' }
    ]}
>
<TabItem value="cancel_flow_executions">

Cancels active runs for a flow. You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs. You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the StopFlow action. You cannot resume a run after you cancel it. When you send your request, the status for each run becomes CancelStarted. When the cancellation completes, the status becomes Canceled. When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing.

```sql
EXEC aws.appflow.flows.cancel_flow_executions 
@region='{{ region }}' --required 
@@json=
'{
"flowName": "{{ flowName }}", 
"executionIds": "{{ executionIds }}"
}'
;
```
</TabItem>
<TabItem value="start_flow">

Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.

```sql
EXEC aws.appflow.flows.start_flow 
@region='{{ region }}' --required 
@@json=
'{
"flowName": "{{ flowName }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="stop_flow">

Deactivates the existing flow. For on-demand flows, this operation returns an unsupportedOperationException error message. For schedule and event-triggered flows, this operation deactivates the flow.

```sql
EXEC aws.appflow.flows.stop_flow 
@region='{{ region }}' --required 
@@json=
'{
"flowName": "{{ flowName }}"
}'
;
```
</TabItem>
</Tabs>
