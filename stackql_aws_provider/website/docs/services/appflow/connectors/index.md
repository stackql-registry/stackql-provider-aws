--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appflow.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'describe_connectors', value: 'describe_connectors' }
    ]}
>
<TabItem value="describe_connector">

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
    <td><CopyableCode code="authenticationConfig" /></td>
    <td><code>object</code></td>
    <td>The authentication config required for the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="canUseAsDestination" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the connector can be used as a destination.</td>
</tr>
<tr>
    <td><CopyableCode code="canUseAsSource" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the connector can be used as a source.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the registered connector. (pattern: &lt;code&gt;arn:aws:.*:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorDescription" /></td>
    <td><code>string</code></td>
    <td>A description about the connector. (pattern: &lt;code&gt;&#91;\w!@#\-.?,\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorLabel" /></td>
    <td><code>string</code></td>
    <td>The label used for registering the connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;\w!@#.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorMetadata" /></td>
    <td><code>object</code></td>
    <td>Specifies connector-specific metadata such as oAuthScopes, supportedRegions, privateLinkServiceUrl, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorModes" /></td>
    <td><code>array</code></td>
    <td>The connection modes that the connector supports.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorName" /></td>
    <td><code>string</code></td>
    <td>The connector name. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorOwner" /></td>
    <td><code>string</code></td>
    <td>The owner who developed the connector. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorProvisioningConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration required for registering the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorProvisioningType" /></td>
    <td><code>string</code></td>
    <td>The provisioning type used to register the connector. (LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorRuntimeSettings" /></td>
    <td><code>array</code></td>
    <td>The required connector runtime settings.</td>
</tr>
<tr>
    <td><CopyableCode code="connectorType" /></td>
    <td><code>string</code></td>
    <td>The connector type. (Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, LookoutMetrics, Upsolver, Honeycode, CustomerProfiles, SAPOData, CustomConnector, Pardot)</td>
</tr>
<tr>
    <td><CopyableCode code="connectorVersion" /></td>
    <td><code>string</code></td>
    <td>The connector version. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isPrivateLinkEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if PrivateLink is enabled for that connector.</td>
</tr>
<tr>
    <td><CopyableCode code="isPrivateLinkEndpointUrlRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if a PrivateLink endpoint URL is required.</td>
</tr>
<tr>
    <td><CopyableCode code="logoURL" /></td>
    <td><code>string</code></td>
    <td>Logo URL of the connector. (pattern: &lt;code&gt;^(https?|ftp|file):​//&#91;-a-zA-Z0-9+&@#/%?=~_|!:,.;&#93;*&#91;-a-zA-Z0-9+&@#/%=~_|&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registeredAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which the connector was registered.</td>
</tr>
<tr>
    <td><CopyableCode code="registeredBy" /></td>
    <td><code>string</code></td>
    <td>Information about who registered the connector. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supportedApiVersions" /></td>
    <td><code>array</code></td>
    <td>A list of API versions that are supported by the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedDataTransferApis" /></td>
    <td><code>array</code></td>
    <td>The APIs of the connector application that Amazon AppFlow can use to transfer your data.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedDataTransferTypes" /></td>
    <td><code>array</code></td>
    <td>The data transfer types that the connector supports. RECORD Structured records. FILE Files or binary data.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedDestinationConnectors" /></td>
    <td><code>array</code></td>
    <td>Lists the connectors that are available for use as destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedOperators" /></td>
    <td><code>array</code></td>
    <td>A list of operators supported by the connector.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedSchedulingFrequencies" /></td>
    <td><code>array</code></td>
    <td>Specifies the supported flow frequency for that connector.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedTriggerTypes" /></td>
    <td><code>array</code></td>
    <td>Specifies the supported trigger types for the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedWriteOperations" /></td>
    <td><code>array</code></td>
    <td>A list of write operations supported by the connector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_connectors">

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
    <td><CopyableCode code="connectorConfigurations" /></td>
    <td><code>object</code></td>
    <td>The configuration that is applied to the connectors used in the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>Information about the connectors supported in Amazon AppFlow.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token for the next page of data. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#describe_connector"><CopyableCode code="describe_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.</td>
</tr>
<tr>
    <td><a href="#describe_connectors"><CopyableCode code="describe_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a nextToken object, which can be be passed in to the next call to the DescribeConnectors API operation to retrieve the next page.</td>
</tr>
<tr>
    <td><a href="#register_connector"><CopyableCode code="register_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.</td>
</tr>
<tr>
    <td><a href="#update_connector_registration"><CopyableCode code="update_connector_registration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectorLabel"><code>connectorLabel</code></a></td>
    <td></td>
    <td>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following: The latest version of the AWS Lambda function that's assigned to the connector A new AWS Lambda function that you specify</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors.</td>
</tr>
<tr>
    <td><a href="#reset_connector_metadata_cache"><CopyableCode code="reset_connector_metadata_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resets metadata about your connector entities that Amazon AppFlow stored in its cache. Use this action when you want Amazon AppFlow to return the latest information about the data that you have in a source application. Amazon AppFlow returns metadata about your entities when you use the ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to the source application. Amazon AppFlow automatically resets the cache once every hour, but you can use this action when you want to get the latest metadata right away.</td>
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
    defaultValue="describe_connector"
    values={[
        { label: 'describe_connector', value: 'describe_connector' },
        { label: 'describe_connectors', value: 'describe_connectors' }
    ]}
>
<TabItem value="describe_connector">

Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.

```sql
SELECT
authenticationConfig,
canUseAsDestination,
canUseAsSource,
connectorArn,
connectorDescription,
connectorLabel,
connectorMetadata,
connectorModes,
connectorName,
connectorOwner,
connectorProvisioningConfig,
connectorProvisioningType,
connectorRuntimeSettings,
connectorType,
connectorVersion,
isPrivateLinkEnabled,
isPrivateLinkEndpointUrlRequired,
logoURL,
registeredAt,
registeredBy,
supportedApiVersions,
supportedDataTransferApis,
supportedDataTransferTypes,
supportedDestinationConnectors,
supportedOperators,
supportedSchedulingFrequencies,
supportedTriggerTypes,
supportedWriteOperations
FROM aws.appflow.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_connectors">

Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a nextToken object, which can be be passed in to the next call to the DescribeConnectors API operation to retrieve the next page.

```sql
SELECT
connectorConfigurations,
connectors,
nextToken
FROM aws.appflow.connectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_connector"
    values={[
        { label: 'register_connector', value: 'register_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_connector">

Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.

```sql
INSERT INTO aws.appflow.connectors (
connectorLabel,
description,
connectorProvisioningType,
connectorProvisioningConfig,
clientToken,
region
)
SELECT 
'{{ connectorLabel }}',
'{{ description }}',
'{{ connectorProvisioningType }}',
'{{ connectorProvisioningConfig }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
connectorArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: connectorLabel
      value: "{{ connectorLabel }}"
    - name: description
      value: "{{ description }}"
    - name: connectorProvisioningType
      value: "{{ connectorProvisioningType }}"
      description: |
        The type of provisioning that the connector supports, such as Lambda.
      valid_values: ['LAMBDA']
    - name: connectorProvisioningConfig
      description: |
        Contains information about the configuration of the connector being registered.
      value:
        lambda:
          lambdaArn: "{{ lambdaArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connector_registration"
    values={[
        { label: 'update_connector_registration', value: 'update_connector_registration' }
    ]}
>
<TabItem value="update_connector_registration">

Updates a custom connector that you've previously registered. This operation updates the connector with one of the following: The latest version of the AWS Lambda function that's assigned to the connector A new AWS Lambda function that you specify

```sql
UPDATE aws.appflow.connectors
SET 
connectorLabel = '{{ connectorLabel }}',
description = '{{ description }}',
connectorProvisioningConfig = '{{ connectorProvisioningConfig }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND connectorLabel = '{{ connectorLabel }}' --required
RETURNING
connectorArn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_connectors"
    values={[
        { label: 'list_connectors', value: 'list_connectors' },
        { label: 'reset_connector_metadata_cache', value: 'reset_connector_metadata_cache' }
    ]}
>
<TabItem value="list_connectors">

Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors.

```sql
EXEC aws.appflow.connectors.list_connectors 
@region='{{ region }}' --required 
@@json=
'{
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
<TabItem value="reset_connector_metadata_cache">

Resets metadata about your connector entities that Amazon AppFlow stored in its cache. Use this action when you want Amazon AppFlow to return the latest information about the data that you have in a source application. Amazon AppFlow returns metadata about your entities when you use the ListConnectorEntities or DescribeConnectorEntities actions. Following these actions, Amazon AppFlow caches the metadata to reduce the number of API requests that it must send to the source application. Amazon AppFlow automatically resets the cache once every hour, but you can use this action when you want to get the latest metadata right away.

```sql
EXEC aws.appflow.connectors.reset_connector_metadata_cache 
@region='{{ region }}' --required 
@@json=
'{
"connectorProfileName": "{{ connectorProfileName }}", 
"connectorType": "{{ connectorType }}", 
"connectorEntityName": "{{ connectorEntityName }}", 
"entitiesPath": "{{ entitiesPath }}", 
"apiVersion": "{{ apiVersion }}"
}'
;
```
</TabItem>
</Tabs>
