--- 
title: account_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_associations
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

Creates, updates, deletes, gets or lists an <code>account_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.account_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_association"
    values={[
        { label: 'get_account_association', value: 'get_account_association' },
        { label: 'list_account_associations', value: 'list_account_associations' }
    ]}
>
<TabItem value="get_account_association">

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
    <td><CopyableCode code="account_association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the retrieved account association. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account association. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:account-association/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_state" /></td>
    <td><code>string</code></td>
    <td>The current status state for the account association. (ASSOCIATION_IN_PROGRESS, ASSOCIATION_FAILED, ASSOCIATION_SUCCEEDED, ASSOCIATION_DELETING, REFRESH_TOKEN_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_destination_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination associated with this account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message explaining the current account association error. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="general_authorization" /></td>
    <td><code>object</code></td>
    <td>The General Authorization reference by authorization material name.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="o_auth_authorization_url" /></td>
    <td><code>string</code></td>
    <td>Third party IoT platform OAuth authorization server URL backed with all the required parameters to perform end-user authentication. This field will be empty when using General Authorization flows that do not require OAuth. (pattern: &lt;code&gt;$|^(https):\/\/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the account association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_account_associations">

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
    <td><CopyableCode code="account_association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account association. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account association. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:account-association/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="association_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the account association, indicating its status in the association lifecycle. (ASSOCIATION_IN_PROGRESS, ASSOCIATION_FAILED, ASSOCIATION_SUCCEEDED, ASSOCIATION_DELETING, REFRESH_TOKEN_EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_destination_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination associated with this account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message explaining any issues with the account association, if applicable. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the account association. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_account_association"><CopyableCode code="get_account_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_association_id"><code>account_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get an account association for an Amazon Web Services account linked to a customer-managed destination.</td>
</tr>
<tr>
    <td><a href="#list_account_associations"><CopyableCode code="list_account_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConnectorDestinationId"><code>ConnectorDestinationId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists all account associations, with optional filtering by connector destination ID.</td>
</tr>
<tr>
    <td><a href="#register_account_association"><CopyableCode code="register_account_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ManagedThingId"><code>ManagedThingId</code></a>, <a href="#parameter-AccountAssociationId"><code>AccountAssociationId</code></a>, <a href="#parameter-DeviceDiscoveryId"><code>DeviceDiscoveryId</code></a></td>
    <td></td>
    <td>Registers an account association with a managed thing, establishing a connection between a device and a third-party account.</td>
</tr>
<tr>
    <td><a href="#create_account_association"><CopyableCode code="create_account_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectorDestinationId"><code>ConnectorDestinationId</code></a></td>
    <td></td>
    <td>Creates a new account association via the destination id.</td>
</tr>
<tr>
    <td><a href="#update_account_association"><CopyableCode code="update_account_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_association_id"><code>account_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing account association.</td>
</tr>
<tr>
    <td><a href="#deregister_account_association"><CopyableCode code="deregister_account_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregister an account association from a managed thing.</td>
</tr>
<tr>
    <td><a href="#delete_account_association"><CopyableCode code="delete_account_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_association_id"><code>account_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove a third-party account association for an end user. You must first call the DeregisterAccountAssociation to remove the connection between the managed thing and the third-party account before calling the DeleteAccountAssociation API.</td>
</tr>
<tr>
    <td><a href="#start_account_association_refresh"><CopyableCode code="start_account_association_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_association_id"><code>account_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates a refresh of an existing account association to update its authorization and connection status.</td>
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
<tr id="parameter-account_association_id">
    <td><CopyableCode code="account_association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the account association to refresh.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConnectorDestinationId">
    <td><CopyableCode code="ConnectorDestinationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the connector destination to filter account associations by.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of account associations to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_association"
    values={[
        { label: 'get_account_association', value: 'get_account_association' },
        { label: 'list_account_associations', value: 'list_account_associations' }
    ]}
>
<TabItem value="get_account_association">

Get an account association for an Amazon Web Services account linked to a customer-managed destination.

```sql
SELECT
account_association_id,
arn,
association_state,
connector_destination_id,
description,
error_message,
general_authorization,
name,
o_auth_authorization_url,
tags
FROM aws.iot_managed_integrations.account_associations
WHERE account_association_id = '{{ account_association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_account_associations">

Lists all account associations, with optional filtering by connector destination ID.

```sql
SELECT
account_association_id,
arn,
association_state,
connector_destination_id,
description,
error_message,
name
FROM aws.iot_managed_integrations.account_associations
WHERE region = '{{ region }}' -- required
AND ConnectorDestinationId = '{{ ConnectorDestinationId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_account_association"
    values={[
        { label: 'register_account_association', value: 'register_account_association' },
        { label: 'create_account_association', value: 'create_account_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_account_association">

Registers an account association with a managed thing, establishing a connection between a device and a third-party account.

```sql
INSERT INTO aws.iot_managed_integrations.account_associations (
ManagedThingId,
AccountAssociationId,
DeviceDiscoveryId,
region
)
SELECT 
'{{ ManagedThingId }}' /* required */,
'{{ AccountAssociationId }}' /* required */,
'{{ DeviceDiscoveryId }}' /* required */,
'{{ region }}'
RETURNING
account_association_id,
device_discovery_id,
managed_thing_id
;
```
</TabItem>
<TabItem value="create_account_association">

Creates a new account association via the destination id.

```sql
INSERT INTO aws.iot_managed_integrations.account_associations (
ClientToken,
ConnectorDestinationId,
Name,
Description,
Tags,
GeneralAuthorization,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ConnectorDestinationId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ Tags }}',
'{{ GeneralAuthorization }}',
'{{ region }}'
RETURNING
account_association_id,
arn,
association_state,
o_auth_authorization_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_associations resource.
    - name: ManagedThingId
      value: "{{ ManagedThingId }}"
    - name: AccountAssociationId
      value: "{{ AccountAssociationId }}"
    - name: DeviceDiscoveryId
      value: "{{ DeviceDiscoveryId }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ConnectorDestinationId
      value: "{{ ConnectorDestinationId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: GeneralAuthorization
      description: |
        The General Authorization reference by authorization material name.
      value:
        AuthMaterialName: "{{ AuthMaterialName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_association"
    values={[
        { label: 'update_account_association', value: 'update_account_association' }
    ]}
>
<TabItem value="update_account_association">

Updates the properties of an existing account association.

```sql
UPDATE aws.iot_managed_integrations.account_associations
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
account_association_id = '{{ account_association_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_account_association"
    values={[
        { label: 'deregister_account_association', value: 'deregister_account_association' },
        { label: 'delete_account_association', value: 'delete_account_association' }
    ]}
>
<TabItem value="deregister_account_association">

Deregister an account association from a managed thing.

```sql
DELETE FROM aws.iot_managed_integrations.account_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_account_association">

Remove a third-party account association for an end user. You must first call the DeregisterAccountAssociation to remove the connection between the managed thing and the third-party account before calling the DeleteAccountAssociation API.

```sql
DELETE FROM aws.iot_managed_integrations.account_associations
WHERE account_association_id = '{{ account_association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_account_association_refresh"
    values={[
        { label: 'start_account_association_refresh', value: 'start_account_association_refresh' }
    ]}
>
<TabItem value="start_account_association_refresh">

Initiates a refresh of an existing account association to update its authorization and connection status.

```sql
EXEC aws.iot_managed_integrations.account_associations.start_account_association_refresh 
@account_association_id='{{ account_association_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
