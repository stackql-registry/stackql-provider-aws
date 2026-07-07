--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - interconnect
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.interconnect.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

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
    <td>The short identifier of the connection object. (pattern: &lt;code&gt;(mcc|lmcc)-&#91;a-z0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="activationKey" /></td>
    <td><code>string</code></td>
    <td>The Activation Key associated to this connection.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>An ARN of a Connection object. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:interconnect:&#91;^:&#93;+:&#91;0-9&#93;&#123;12&#125;:connection/(mcc|lmcc)-&#91;a-z0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachPoint" /></td>
    <td><code>object</code></td>
    <td>The Attach Point to which the connection should be associated."</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>The specific selected bandwidth of this connection. (pattern: &lt;code&gt;\d+&#91;MG&#93;bps&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billingTier" /></td>
    <td><code>integer</code></td>
    <td>The billing tier this connection is currently assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A descriptive name for the connection. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The specific Environment this connection is placed upon.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The provider specific location on the remote side of this Connection</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccount" /></td>
    <td><code>string</code></td>
    <td>The account that owns this Connection (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The provider on the remote side of this Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="sharedId" /></td>
    <td><code>string</code></td>
    <td>An identifier used by both AWS and the remote partner to identify the specific connection. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>requested: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal. pending: The connection has been accepted and is being provisioned between AWS and the Partner. available: The connection has been fully provisioned between AWS and the Partner. deleting: The connection is being deleted. deleted: The connection has been deleted. failed: The connection has failed to be created. updating: The connection is being updated. (available, requested, pending, down, deleting, deleted, failed, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags on the Connection</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The specific product type of this Connection.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connections">

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
    <td>The identifier of the requested Connection (pattern: &lt;code&gt;(mcc|lmcc)-&#91;a-z0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Connection (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:interconnect:&#91;^:&#93;+:&#91;0-9&#93;&#123;12&#125;:connection/(mcc|lmcc)-&#91;a-z0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachPoint" /></td>
    <td><code>object</code></td>
    <td>The Attach Point to which the connection should be associated.</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>The bandwidth of the Connection (pattern: &lt;code&gt;\d+&#91;MG&#93;bps&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billingTier" /></td>
    <td><code>integer</code></td>
    <td>The billing tier this connection is currently assigned.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A descriptive name of the Connection (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The Environment that this Connection is created on.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The provider specific location at the remote end of this Connection</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The provider on the remote end of this Connection</td>
</tr>
<tr>
    <td><CopyableCode code="sharedId" /></td>
    <td><code>string</code></td>
    <td>An identifier used by both AWS and the remote partner to identify the specific connection. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>requested: The initial state of a connection. The state will remain here until the Connection is accepted on the Partner portal. pending: The connection has been accepted and is being provisioned between AWS and the Partner. available: The connection has been fully provisioned between AWS and the Partner. deleting: The connection is being deleted. deleted: The connection has been deleted. failed: The connection has failed to be created. updating: The connection is being updated. (available, requested, pending, down, deleting, deleted, failed, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The product variant supplied by this resource.</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current state of a Connection resource as specified by the identifier.</td>
</tr>
<tr>
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all connection objects to which the caller has access. Allows for optional filtering by the following properties: state environmentId provider attach point Only Connection objects matching all filters will be returned.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bandwidth"><code>bandwidth</code></a>, <a href="#parameter-attachPoint"><code>attachPoint</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a></td>
    <td></td>
    <td>Initiates the process to create a Connection across the specified Environment. The Environment dictates the specified partner and location to which the other end of the connection should attach. You can see a list of the available Environments by calling ListEnvironments The Attach Point specifies where within the AWS Network your connection will logically connect. After a successful call to this method, the resulting Connection will return an Activation Key which will need to be brought to the specific partner's portal to confirm the Connection on both sides. (See Environment$activationPageUrl for a direct link to the partner portal).</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-identifier"><code>identifier</code></a></td>
    <td></td>
    <td>Modifies an existing connection. Currently we support modifications to the connection's description and/or bandwidth.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Connection with the supplied identifier. This operation will also inform the remote partner of your intention to delete your connection. Note, the partner may still require you to delete to fully clean up resources, but the network connectivity provided by the Connection will cease to exist.</td>
</tr>
<tr>
    <td><a href="#accept_connection_proposal"><CopyableCode code="accept_connection_proposal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-attachPoint"><code>attachPoint</code></a>, <a href="#parameter-activationKey"><code>activationKey</code></a></td>
    <td></td>
    <td>Accepts a connection proposal which was generated at a supported partner's portal. The proposal contains the Environment and bandwidth that were chosen on the partner's portal and cannot be modified. Upon accepting the proposal a connection will be made between the AWS network as accessed via the selected Attach Point and the network previously selected network on the partner's portal.</td>
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
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

Describes the current state of a Connection resource as specified by the identifier.

```sql
SELECT
id,
activationKey,
arn,
attachPoint,
bandwidth,
billingTier,
description,
environmentId,
location,
ownerAccount,
provider,
sharedId,
state,
tags,
type_
FROM aws.interconnect.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connections">

Lists all connection objects to which the caller has access. Allows for optional filtering by the following properties: state environmentId provider attach point Only Connection objects matching all filters will be returned.

```sql
SELECT
id,
arn,
attachPoint,
bandwidth,
billingTier,
description,
environmentId,
location,
provider,
sharedId,
state,
type_
FROM aws.interconnect.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Initiates the process to create a Connection across the specified Environment. The Environment dictates the specified partner and location to which the other end of the connection should attach. You can see a list of the available Environments by calling ListEnvironments The Attach Point specifies where within the AWS Network your connection will logically connect. After a successful call to this method, the resulting Connection will return an Activation Key which will need to be brought to the specific partner's portal to confirm the Connection on both sides. (See Environment$activationPageUrl for a direct link to the partner portal).

```sql
INSERT INTO aws.interconnect.connections (
description,
bandwidth,
attachPoint,
environmentId,
remoteAccount,
tags,
clientToken,
region
)
SELECT 
'{{ description }}',
'{{ bandwidth }}' /* required */,
'{{ attachPoint }}' /* required */,
'{{ environmentId }}' /* required */,
'{{ remoteAccount }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
connection
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: description
      value: "{{ description }}"
      description: |
        A description to distinguish this Connection.
    - name: bandwidth
      value: "{{ bandwidth }}"
      description: |
        The desired bandwidth of the requested Connection
    - name: attachPoint
      description: |
        The Attach Point to which the connection should be associated."
      value:
        directConnectGateway: "{{ directConnectGateway }}"
        arn: "{{ arn }}"
    - name: environmentId
      value: "{{ environmentId }}"
      description: |
        The identifier of the Environment across which this Connection should be created. The available Environment objects can be determined using ListEnvironments.
    - name: remoteAccount
      description: |
        Account and/or principal identifying information that can be verified by the partner of this specific Environment.
      value:
        identifier: "{{ identifier }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The tag to associate with the resulting Connection.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token used for the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection"
    values={[
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="update_connection">

Modifies an existing connection. Currently we support modifications to the connection's description and/or bandwidth.

```sql
UPDATE aws.interconnect.connections
SET 
identifier = '{{ identifier }}',
description = '{{ description }}',
bandwidth = '{{ bandwidth }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND identifier = '{{ identifier }}' --required
RETURNING
connection;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Deletes an existing Connection with the supplied identifier. This operation will also inform the remote partner of your intention to delete your connection. Note, the partner may still require you to delete to fully clean up resources, but the network connectivity provided by the Connection will cease to exist.

```sql
DELETE FROM aws.interconnect.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_connection_proposal"
    values={[
        { label: 'accept_connection_proposal', value: 'accept_connection_proposal' }
    ]}
>
<TabItem value="accept_connection_proposal">

Accepts a connection proposal which was generated at a supported partner's portal. The proposal contains the Environment and bandwidth that were chosen on the partner's portal and cannot be modified. Upon accepting the proposal a connection will be made between the AWS network as accessed via the selected Attach Point and the network previously selected network on the partner's portal.

```sql
EXEC aws.interconnect.connections.accept_connection_proposal 
@region='{{ region }}' --required 
@@json=
'{
"attachPoint": "{{ attachPoint }}", 
"activationKey": "{{ activationKey }}", 
"description": "{{ description }}", 
"tags": "{{ tags }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
