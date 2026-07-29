--- 
title: managed_things
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_things
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_thing"
    values={[
        { label: 'get_managed_thing', value: 'get_managed_thing' },
        { label: 'list_managed_things', value: 'list_managed_things' }
    ]}
>
<TabItem value="get_managed_thing">

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
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestampe value of when the device was activated.</td>
</tr>
<tr>
    <td><CopyableCode code="advertised_product_id" /></td>
    <td><code>string</code></td>
    <td>The id of the advertised product. (pattern: &lt;code&gt;(&#91;A-Za-z0-9!#$%&()*\+\-;&lt;=&gt;?@^_`&#123;|&#125;~&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the managed thing. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:managed-thing/(&#91;0-9a-zA-Z:_-&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>The brand of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>The classification of the managed thing such as light bulb or thermostat.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_destination_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination associated with this managed thing. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_device_id" /></td>
    <td><code>string</code></td>
    <td>The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII). This parameter is used for cloud-to-cloud devices only. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_policy_id" /></td>
    <td><code>string</code></td>
    <td>The id of the connector policy. This parameter is used for cloud-to-cloud devices only. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the device creation request occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_locker_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the credential locker for the managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_specific_key" /></td>
    <td><code>string</code></td>
    <td>A Zwave device-specific key used during device activation. This parameter is used for Zwave devices only. (pattern: &lt;code&gt;&#91;a-zA-Z0-9=_.,@\+\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hub_network_mode" /></td>
    <td><code>string</code></td>
    <td>The network mode for the hub-connected device. (STANDARD, NETWORK_WIDE_EXCLUSION)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="international_article_number" /></td>
    <td><code>string</code></td>
    <td>The unique 13 digit number that identifies the managed thing. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>The media access control (MAC) address for the device represented by the managed thing. This parameter is used for Zigbee devices only.</td>
</tr>
<tr>
    <td><CopyableCode code="meta_data" /></td>
    <td><code>object</code></td>
    <td>The metadata for the managed thing.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The model of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed thing representing the physical device. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_controller_id" /></td>
    <td><code>string</code></td>
    <td>Id of the controller device used for the discovery job. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations. For more information, see Device Provisioning. (UNASSOCIATED, PRE_ASSOCIATED, DISCOVERED, ACTIVATED, DELETION_FAILED, DELETE_IN_PROGRESS, ISOLATED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device. (CONTROLLER, DEVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>The serial number of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the managed thing.</td>
</tr>
<tr>
    <td><CopyableCode code="universal_product_code" /></td>
    <td><code>string</code></td>
    <td>The universal product code (UPC) of the device model. The UPC is typically used in the United States of America and Canada. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the managed thing was last updated at.</td>
</tr>
<tr>
    <td><CopyableCode code="wi_fi_simple_setup_configuration" /></td>
    <td><code>object</code></td>
    <td>The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_things">

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
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestampe value of when the managed thing was activated at.</td>
</tr>
<tr>
    <td><CopyableCode code="advertised_product_id" /></td>
    <td><code>string</code></td>
    <td>The id of the advertised product. (pattern: &lt;code&gt;(&#91;A-Za-z0-9!#$%&()*\+\-;&lt;=&gt;?@^_`&#123;|&#125;~&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the managed thing. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:managed-thing/(&#91;0-9a-zA-Z:_-&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>The brand of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>The classification of the managed thing such as light bulb or thermostat.</td>
</tr>
<tr>
    <td><CopyableCode code="connector_destination_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination associated with this managed thing, if applicable. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_device_id" /></td>
    <td><code>string</code></td>
    <td>The third-party device id as defined by the connector. This device id must not contain personal identifiable information (PII). This parameter is used for cloud-to-cloud devices only. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_policy_id" /></td>
    <td><code>string</code></td>
    <td>The id of the connector policy. This parameter is used for cloud-to-cloud devices only. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the device creation request occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_locker_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the credential locker for the managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The model of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed thing representing the physical device. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the device, usually an indication of whom the device belongs to. This value should not contain personal identifiable information. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_controller_id" /></td>
    <td><code>string</code></td>
    <td>Id of the controller device used for the discovery job. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the device in the provisioning workflow for onboarding to IoT managed integrations. For more information, see Device Provisioning. (UNASSOCIATED, PRE_ASSOCIATED, DISCOVERED, ACTIVATED, DELETION_FAILED, DELETE_IN_PROGRESS, ISOLATED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device. (CONTROLLER, DEVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>The serial number of the device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the managed thing was last updated at.</td>
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
    <td><a href="#get_managed_thing"><CopyableCode code="get_managed_thing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of a managed thing including its attributes and capabilities.</td>
</tr>
<tr>
    <td><a href="#list_managed_things"><CopyableCode code="list_managed_things" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OwnerFilter"><code>OwnerFilter</code></a>, <a href="#parameter-CredentialLockerFilter"><code>CredentialLockerFilter</code></a>, <a href="#parameter-RoleFilter"><code>RoleFilter</code></a>, <a href="#parameter-ParentControllerIdentifierFilter"><code>ParentControllerIdentifierFilter</code></a>, <a href="#parameter-ConnectorPolicyIdFilter"><code>ConnectorPolicyIdFilter</code></a>, <a href="#parameter-ConnectorDestinationIdFilter"><code>ConnectorDestinationIdFilter</code></a>, <a href="#parameter-ConnectorDeviceIdFilter"><code>ConnectorDeviceIdFilter</code></a>, <a href="#parameter-SerialNumberFilter"><code>SerialNumberFilter</code></a>, <a href="#parameter-ProvisioningStatusFilter"><code>ProvisioningStatusFilter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Listing all managed things with provision for filters.</td>
</tr>
<tr>
    <td><a href="#create_managed_thing"><CopyableCode code="create_managed_thing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthenticationMaterial"><code>AuthenticationMaterial</code></a>, <a href="#parameter-AuthenticationMaterialType"><code>AuthenticationMaterialType</code></a></td>
    <td></td>
    <td>Creates a managed thing. A managed thing contains the device identifier, protocol supported, and capabilities of the device in a data model format defined by Managed integrations.</td>
</tr>
<tr>
    <td><a href="#update_managed_thing"><CopyableCode code="update_managed_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the attributes and capabilities associated with a managed thing.</td>
</tr>
<tr>
    <td><a href="#delete_managed_thing"><CopyableCode code="delete_managed_thing" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a></td>
    <td>Delete a managed thing. For direct-connected and hub-connected devices connecting with Managed integrations via a controller, all of the devices connected to it will have their status changed to PENDING. It is not possible to remove a cloud-to-cloud device.</td>
</tr>
<tr>
    <td><a href="#reset_runtime_log_configuration"><CopyableCode code="reset_runtime_log_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-managed_thing_id"><code>managed_thing_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Reset a runtime log configuration for a specific managed thing.</td>
</tr>
<tr>
    <td><a href="#send_managed_thing_command"><CopyableCode code="send_managed_thing_command" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-managed_thing_id"><code>managed_thing_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Endpoints"><code>Endpoints</code></a></td>
    <td></td>
    <td>Send the command to the device represented by the managed thing.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The id of the managed thing.</td>
</tr>
<tr id="parameter-managed_thing_id">
    <td><CopyableCode code="managed_thing_id" /></td>
    <td><code>string</code></td>
    <td>The id of the device.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConnectorDestinationIdFilter">
    <td><CopyableCode code="ConnectorDestinationIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter managed things by the connector destination ID they are associated with.</td>
</tr>
<tr id="parameter-ConnectorDeviceIdFilter">
    <td><CopyableCode code="ConnectorDeviceIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter managed things by the connector device ID they are associated with. When specified, only managed things with this connector device ID will be returned.</td>
</tr>
<tr id="parameter-ConnectorPolicyIdFilter">
    <td><CopyableCode code="ConnectorPolicyIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on a connector policy id for a managed thing.</td>
</tr>
<tr id="parameter-CredentialLockerFilter">
    <td><CopyableCode code="CredentialLockerFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on a credential locker for a managed thing.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>When set to TRUE, a forceful deteletion of the managed thing will occur. When set to FALSE, a non-forceful deletion of the managed thing will occur.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
<tr id="parameter-OwnerFilter">
    <td><CopyableCode code="OwnerFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on device owners when listing managed things.</td>
</tr>
<tr id="parameter-ParentControllerIdentifierFilter">
    <td><CopyableCode code="ParentControllerIdentifierFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on a parent controller id for a managed thing.</td>
</tr>
<tr id="parameter-ProvisioningStatusFilter">
    <td><CopyableCode code="ProvisioningStatusFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on the status of the device. For more information, see Device Provisioning.</td>
</tr>
<tr id="parameter-RoleFilter">
    <td><CopyableCode code="RoleFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on the type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT device.</td>
</tr>
<tr id="parameter-SerialNumberFilter">
    <td><CopyableCode code="SerialNumberFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on the serial number of the device.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_thing"
    values={[
        { label: 'get_managed_thing', value: 'get_managed_thing' },
        { label: 'list_managed_things', value: 'list_managed_things' }
    ]}
>
<TabItem value="get_managed_thing">

Get details of a managed thing including its attributes and capabilities.

```sql
SELECT
activated_at,
advertised_product_id,
arn,
brand,
classification,
connector_destination_id,
connector_device_id,
connector_policy_id,
created_at,
credential_locker_id,
device_specific_key,
hub_network_mode,
id,
international_article_number,
mac_address,
meta_data,
model,
name,
owner,
parent_controller_id,
provisioning_status,
role,
serial_number,
tags,
universal_product_code,
updated_at,
wi_fi_simple_setup_configuration
FROM aws.iot_managed_integrations.managed_things
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_things">

Listing all managed things with provision for filters.

```sql
SELECT
activated_at,
advertised_product_id,
arn,
brand,
classification,
connector_destination_id,
connector_device_id,
connector_policy_id,
created_at,
credential_locker_id,
id,
model,
name,
owner,
parent_controller_id,
provisioning_status,
role,
serial_number,
updated_at
FROM aws.iot_managed_integrations.managed_things
WHERE region = '{{ region }}' -- required
AND OwnerFilter = '{{ OwnerFilter }}'
AND CredentialLockerFilter = '{{ CredentialLockerFilter }}'
AND RoleFilter = '{{ RoleFilter }}'
AND ParentControllerIdentifierFilter = '{{ ParentControllerIdentifierFilter }}'
AND ConnectorPolicyIdFilter = '{{ ConnectorPolicyIdFilter }}'
AND ConnectorDestinationIdFilter = '{{ ConnectorDestinationIdFilter }}'
AND ConnectorDeviceIdFilter = '{{ ConnectorDeviceIdFilter }}'
AND SerialNumberFilter = '{{ SerialNumberFilter }}'
AND ProvisioningStatusFilter = '{{ ProvisioningStatusFilter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_managed_thing"
    values={[
        { label: 'create_managed_thing', value: 'create_managed_thing' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_managed_thing">

Creates a managed thing. A managed thing contains the device identifier, protocol supported, and capabilities of the device in a data model format defined by Managed integrations.

```sql
INSERT INTO aws.iot_managed_integrations.managed_things (
Role,
Owner,
CredentialLockerId,
AuthenticationMaterial,
AuthenticationMaterialType,
WiFiSimpleSetupConfiguration,
SerialNumber,
Brand,
Model,
Name,
CapabilityReport,
CapabilitySchemas,
Capabilities,
ClientToken,
Classification,
Tags,
MetaData,
region
)
SELECT 
'{{ Role }}',
'{{ Owner }}',
'{{ CredentialLockerId }}',
'{{ AuthenticationMaterial }}' /* required */,
'{{ AuthenticationMaterialType }}' /* required */,
'{{ WiFiSimpleSetupConfiguration }}',
'{{ SerialNumber }}',
'{{ Brand }}',
'{{ Model }}',
'{{ Name }}',
'{{ CapabilityReport }}',
'{{ CapabilitySchemas }}',
'{{ Capabilities }}',
'{{ ClientToken }}',
'{{ Classification }}',
'{{ Tags }}',
'{{ MetaData }}',
'{{ region }}'
RETURNING
arn,
created_at,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: managed_things
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the managed_things resource.
    - name: Role
      value: "{{ Role }}"
      valid_values: ['CONTROLLER', 'DEVICE']
    - name: Owner
      value: "{{ Owner }}"
    - name: CredentialLockerId
      value: "{{ CredentialLockerId }}"
    - name: AuthenticationMaterial
      value: "{{ AuthenticationMaterial }}"
    - name: AuthenticationMaterialType
      value: "{{ AuthenticationMaterialType }}"
      valid_values: ['CUSTOM_PROTOCOL_QR_BAR_CODE', 'WIFI_SETUP_QR_BAR_CODE', 'ZWAVE_QR_BAR_CODE', 'ZIGBEE_QR_BAR_CODE', 'DISCOVERED_DEVICE', 'PRE_ONBOARDED_CLOUD']
    - name: WiFiSimpleSetupConfiguration
      description: |
        The Wi-Fi Simple Setup configuration for the managed thing, which defines provisioning capabilities and timeout settings.
      value:
        EnableAsProvisioner: {{ EnableAsProvisioner }}
        EnableAsProvisionee: {{ EnableAsProvisionee }}
        TimeoutInMinutes: {{ TimeoutInMinutes }}
    - name: SerialNumber
      value: "{{ SerialNumber }}"
    - name: Brand
      value: "{{ Brand }}"
    - name: Model
      value: "{{ Model }}"
    - name: Name
      value: "{{ Name }}"
    - name: CapabilityReport
      description: |
        Report of all capabilities supported by the device.
      value:
        version: "{{ version }}"
        nodeId: "{{ nodeId }}"
        endpoints:
          - id: "{{ id }}"
            deviceTypes: "{{ deviceTypes }}"
            capabilities: "{{ capabilities }}"
    - name: CapabilitySchemas
      value:
        - Format: "{{ Format }}"
          CapabilityId: "{{ CapabilityId }}"
          ExtrinsicId: "{{ ExtrinsicId }}"
          ExtrinsicVersion: {{ ExtrinsicVersion }}
          Schema: "{{ Schema }}"
    - name: Capabilities
      value: "{{ Capabilities }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Classification
      value: "{{ Classification }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: MetaData
      value: "{{ MetaData }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_managed_thing"
    values={[
        { label: 'update_managed_thing', value: 'update_managed_thing' }
    ]}
>
<TabItem value="update_managed_thing">

Update the attributes and capabilities associated with a managed thing.

```sql
UPDATE aws.iot_managed_integrations.managed_things
SET 
Owner = '{{ Owner }}',
CredentialLockerId = '{{ CredentialLockerId }}',
SerialNumber = '{{ SerialNumber }}',
WiFiSimpleSetupConfiguration = '{{ WiFiSimpleSetupConfiguration }}',
Brand = '{{ Brand }}',
Model = '{{ Model }}',
Name = '{{ Name }}',
CapabilityReport = '{{ CapabilityReport }}',
CapabilitySchemas = '{{ CapabilitySchemas }}',
Capabilities = '{{ Capabilities }}',
Classification = '{{ Classification }}',
HubNetworkMode = '{{ HubNetworkMode }}',
MetaData = '{{ MetaData }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_managed_thing"
    values={[
        { label: 'delete_managed_thing', value: 'delete_managed_thing' }
    ]}
>
<TabItem value="delete_managed_thing">

Delete a managed thing. For direct-connected and hub-connected devices connecting with Managed integrations via a controller, all of the devices connected to it will have their status changed to PENDING. It is not possible to remove a cloud-to-cloud device.

```sql
DELETE FROM aws.iot_managed_integrations.managed_things
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND Force = '{{ Force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_runtime_log_configuration"
    values={[
        { label: 'reset_runtime_log_configuration', value: 'reset_runtime_log_configuration' },
        { label: 'send_managed_thing_command', value: 'send_managed_thing_command' }
    ]}
>
<TabItem value="reset_runtime_log_configuration">

Reset a runtime log configuration for a specific managed thing.

```sql
EXEC aws.iot_managed_integrations.managed_things.reset_runtime_log_configuration 
@managed_thing_id='{{ managed_thing_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="send_managed_thing_command">

Send the command to the device represented by the managed thing.

```sql
EXEC aws.iot_managed_integrations.managed_things.send_managed_thing_command 
@managed_thing_id='{{ managed_thing_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Endpoints": "{{ Endpoints }}", 
"ConnectorAssociationId": "{{ ConnectorAssociationId }}", 
"AccountAssociationId": "{{ AccountAssociationId }}"
}'
;
```
</TabItem>
</Tabs>
