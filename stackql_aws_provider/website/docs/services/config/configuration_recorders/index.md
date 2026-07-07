--- 
title: configuration_recorders
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_recorders
  - config
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

Creates, updates, deletes, gets or lists a <code>configuration_recorders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_recorders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.configuration_recorders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_recorders"
    values={[
        { label: 'describe_configuration_recorders', value: 'describe_configuration_recorders' }
    ]}
>
<TabItem value="describe_configuration_recorders">

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
    <td><CopyableCode code="ConfigurationRecorders" /></td>
    <td><code>array</code></td>
    <td>A list that contains the descriptions of the specified configuration recorders.</td>
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
    <td><a href="#describe_configuration_recorders"><CopyableCode code="describe_configuration_recorders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for the configuration recorder you specify. If a configuration recorder is not specified, this operation returns details for the customer managed configuration recorder configured for the account, if applicable. When making a request to this operation, you can only specify one configuration recorder.</td>
</tr>
<tr>
    <td><a href="#associate_resource_types"><CopyableCode code="associate_resource_types" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationRecorderArn"><code>ConfigurationRecorderArn</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a></td>
    <td></td>
    <td>Adds all resource types specified in the ResourceTypes list to the RecordingGroup of specified configuration recorder and includes those resource types when recording. For this operation, the specified configuration recorder must use a RecordingStrategy that is either INCLUSION_BY_RESOURCE_TYPES or EXCLUSION_BY_RESOURCE_TYPES.</td>
</tr>
<tr>
    <td><a href="#put_configuration_recorder"><CopyableCode code="put_configuration_recorder" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationRecorder"><code>ConfigurationRecorder</code></a></td>
    <td></td>
    <td>Creates or updates the customer managed configuration recorder. You can use this operation to create a new customer managed configuration recorder or to update the roleARN and the recordingGroup for an existing customer managed configuration recorder. To start the customer managed configuration recorder and begin recording configuration changes for the resource types you specify, use the StartConfigurationRecorder operation. For more information, see Working with the Configuration Recorder in the Config Developer Guide. One customer managed configuration recorder per account per Region You can create only one customer managed configuration recorder for each account for each Amazon Web Services Region. Default is to record all supported resource types, excluding the global IAM resource types If you have not specified values for the recordingGroup field, the default for the customer managed configuration recorder is to record all supported resource types, excluding the global IAM resource types: AWS::IAM::Group, AWS::IAM::Policy, AWS::IAM::Role, and AWS::IAM::User. Tags are added at creation and cannot be updated PutConfigurationRecorder is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#put_service_linked_configuration_recorder"><CopyableCode code="put_service_linked_configuration_recorder" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServicePrincipal"><code>ServicePrincipal</code></a></td>
    <td></td>
    <td>Creates a service-linked configuration recorder that is linked to a specific Amazon Web Services service based on the ServicePrincipal you specify. The configuration recorder's name, recordingGroup, recordingMode, and recordingScope is set by the service that is linked to the configuration recorder. For more information and a list of supported services/service principals, see Working with the Configuration Recorder in the Config Developer Guide. This API creates a service-linked role AWSServiceRoleForConfig in your account. The service-linked role is created only when the role does not exist in your account. The recording scope determines if you receive configuration items The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel. Tags are added at creation and cannot be updated with this operation Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_recorder"><CopyableCode code="delete_configuration_recorder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the customer managed configuration recorder. This operation does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory operation, but you will not be able to access this information in the Config console until you have created a new customer managed configuration recorder.</td>
</tr>
<tr>
    <td><a href="#delete_service_linked_configuration_recorder"><CopyableCode code="delete_service_linked_configuration_recorder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing service-linked configuration recorder. This operation does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory operation, but you will not be able to access this information in the Config console until you have created a new service-linked configuration recorder for the same service. The recording scope determines if you receive configuration items The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource_types"><CopyableCode code="disassociate_resource_types" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationRecorderArn"><code>ConfigurationRecorderArn</code></a>, <a href="#parameter-ResourceTypes"><code>ResourceTypes</code></a></td>
    <td></td>
    <td>Removes all resource types specified in the ResourceTypes list from the RecordingGroup of configuration recorder and excludes these resource types when recording. For this operation, the configuration recorder must use a RecordingStrategy that is either INCLUSION_BY_RESOURCE_TYPES or EXCLUSION_BY_RESOURCE_TYPES.</td>
</tr>
<tr>
    <td><a href="#list_configuration_recorders"><CopyableCode code="list_configuration_recorders" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of configuration recorders depending on the filters you specify.</td>
</tr>
<tr>
    <td><a href="#start_configuration_recorder"><CopyableCode code="start_configuration_recorder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationRecorderName"><code>ConfigurationRecorderName</code></a></td>
    <td></td>
    <td>Starts the customer managed configuration recorder. The customer managed configuration recorder will begin recording configuration changes for the resource types you specify. You must have created a delivery channel to successfully start the customer managed configuration recorder. You can use the PutDeliveryChannel operation to create a delivery channel.</td>
</tr>
<tr>
    <td><a href="#stop_configuration_recorder"><CopyableCode code="stop_configuration_recorder" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationRecorderName"><code>ConfigurationRecorderName</code></a></td>
    <td></td>
    <td>Stops the customer managed configuration recorder. The customer managed configuration recorder will stop recording configuration changes for the resource types you have specified.</td>
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
    defaultValue="describe_configuration_recorders"
    values={[
        { label: 'describe_configuration_recorders', value: 'describe_configuration_recorders' }
    ]}
>
<TabItem value="describe_configuration_recorders">

Returns details for the configuration recorder you specify. If a configuration recorder is not specified, this operation returns details for the customer managed configuration recorder configured for the account, if applicable. When making a request to this operation, you can only specify one configuration recorder.

```sql
SELECT
ConfigurationRecorders
FROM aws.config.configuration_recorders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resource_types"
    values={[
        { label: 'associate_resource_types', value: 'associate_resource_types' }
    ]}
>
<TabItem value="associate_resource_types">

Adds all resource types specified in the ResourceTypes list to the RecordingGroup of specified configuration recorder and includes those resource types when recording. For this operation, the specified configuration recorder must use a RecordingStrategy that is either INCLUSION_BY_RESOURCE_TYPES or EXCLUSION_BY_RESOURCE_TYPES.

```sql
UPDATE aws.config.configuration_recorders
SET 
ConfigurationRecorderArn = '{{ ConfigurationRecorderArn }}',
ResourceTypes = '{{ ResourceTypes }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationRecorderArn = '{{ ConfigurationRecorderArn }}' --required
AND ResourceTypes = '{{ ResourceTypes }}' --required
RETURNING
ConfigurationRecorder;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configuration_recorder"
    values={[
        { label: 'put_configuration_recorder', value: 'put_configuration_recorder' },
        { label: 'put_service_linked_configuration_recorder', value: 'put_service_linked_configuration_recorder' }
    ]}
>
<TabItem value="put_configuration_recorder">

Creates or updates the customer managed configuration recorder. You can use this operation to create a new customer managed configuration recorder or to update the roleARN and the recordingGroup for an existing customer managed configuration recorder. To start the customer managed configuration recorder and begin recording configuration changes for the resource types you specify, use the StartConfigurationRecorder operation. For more information, see Working with the Configuration Recorder in the Config Developer Guide. One customer managed configuration recorder per account per Region You can create only one customer managed configuration recorder for each account for each Amazon Web Services Region. Default is to record all supported resource types, excluding the global IAM resource types If you have not specified values for the recordingGroup field, the default for the customer managed configuration recorder is to record all supported resource types, excluding the global IAM resource types: AWS::IAM::Group, AWS::IAM::Policy, AWS::IAM::Role, and AWS::IAM::User. Tags are added at creation and cannot be updated PutConfigurationRecorder is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.configuration_recorders
SET 
ConfigurationRecorder = '{{ ConfigurationRecorder }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationRecorder = '{{ ConfigurationRecorder }}' --required;
```
</TabItem>
<TabItem value="put_service_linked_configuration_recorder">

Creates a service-linked configuration recorder that is linked to a specific Amazon Web Services service based on the ServicePrincipal you specify. The configuration recorder's name, recordingGroup, recordingMode, and recordingScope is set by the service that is linked to the configuration recorder. For more information and a list of supported services/service principals, see Working with the Configuration Recorder in the Config Developer Guide. This API creates a service-linked role AWSServiceRoleForConfig in your account. The service-linked role is created only when the role does not exist in your account. The recording scope determines if you receive configuration items The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel. Tags are added at creation and cannot be updated with this operation Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.configuration_recorders
SET 
ServicePrincipal = '{{ ServicePrincipal }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ServicePrincipal = '{{ ServicePrincipal }}' --required
RETURNING
Arn,
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_recorder"
    values={[
        { label: 'delete_configuration_recorder', value: 'delete_configuration_recorder' },
        { label: 'delete_service_linked_configuration_recorder', value: 'delete_service_linked_configuration_recorder' }
    ]}
>
<TabItem value="delete_configuration_recorder">

Deletes the customer managed configuration recorder. This operation does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory operation, but you will not be able to access this information in the Config console until you have created a new customer managed configuration recorder.

```sql
DELETE FROM aws.config.configuration_recorders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_service_linked_configuration_recorder">

Deletes an existing service-linked configuration recorder. This operation does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory operation, but you will not be able to access this information in the Config console until you have created a new service-linked configuration recorder for the same service. The recording scope determines if you receive configuration items The recording scope is set by the service that is linked to the configuration recorder and determines whether you receive configuration items (CIs) in the delivery channel. If the recording scope is internal, you will not receive CIs in the delivery channel.

```sql
DELETE FROM aws.config.configuration_recorders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resource_types"
    values={[
        { label: 'disassociate_resource_types', value: 'disassociate_resource_types' },
        { label: 'list_configuration_recorders', value: 'list_configuration_recorders' },
        { label: 'start_configuration_recorder', value: 'start_configuration_recorder' },
        { label: 'stop_configuration_recorder', value: 'stop_configuration_recorder' }
    ]}
>
<TabItem value="disassociate_resource_types">

Removes all resource types specified in the ResourceTypes list from the RecordingGroup of configuration recorder and excludes these resource types when recording. For this operation, the configuration recorder must use a RecordingStrategy that is either INCLUSION_BY_RESOURCE_TYPES or EXCLUSION_BY_RESOURCE_TYPES.

```sql
EXEC aws.config.configuration_recorders.disassociate_resource_types 
@region='{{ region }}' --required 
@@json=
'{
"ConfigurationRecorderArn": "{{ ConfigurationRecorderArn }}", 
"ResourceTypes": "{{ ResourceTypes }}"
}'
;
```
</TabItem>
<TabItem value="list_configuration_recorders">

Returns a list of configuration recorders depending on the filters you specify.

```sql
EXEC aws.config.configuration_recorders.list_configuration_recorders 
@region='{{ region }}' --required 
@@json=
'{
"Filters": "{{ Filters }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="start_configuration_recorder">

Starts the customer managed configuration recorder. The customer managed configuration recorder will begin recording configuration changes for the resource types you specify. You must have created a delivery channel to successfully start the customer managed configuration recorder. You can use the PutDeliveryChannel operation to create a delivery channel.

```sql
EXEC aws.config.configuration_recorders.start_configuration_recorder 
@region='{{ region }}' --required 
@@json=
'{
"ConfigurationRecorderName": "{{ ConfigurationRecorderName }}"
}'
;
```
</TabItem>
<TabItem value="stop_configuration_recorder">

Stops the customer managed configuration recorder. The customer managed configuration recorder will stop recording configuration changes for the resource types you have specified.

```sql
EXEC aws.config.configuration_recorders.stop_configuration_recorder 
@region='{{ region }}' --required 
@@json=
'{
"ConfigurationRecorderName": "{{ ConfigurationRecorderName }}"
}'
;
```
</TabItem>
</Tabs>
