--- 
title: network_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - network_connectors
  - lambda_core
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

Creates, updates, deletes, gets or lists a <code>network_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda_core.network_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_connector"
    values={[
        { label: 'get_network_connector', value: 'get_network_connector' },
        { label: 'list_network_connectors', value: 'list_network_connectors' }
    ]}
>
<TabItem value="get_network_connector">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network connector. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z-&#93;*:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:network-connector:&#91;a-zA-Z0-9-_&#93;+(:&#91;1-9&#93;|&#91;1-9&#93;&#91;0-9&#93;+)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for a network connector. Different connector types use different configuration shapes; specify the configuration that matches your connector type.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a network connector, assigned by the service at creation time</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the connector configuration was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent update operation (Successful, Failed, or InProgress). (Successful, Failed, InProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of the last update status.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status_reason_code" /></td>
    <td><code>string</code></td>
    <td>A machine-readable code indicating the reason for the last update status. Use this for programmatic error handling. (DisallowedByVpcEncryptionControl, Ec2RequestLimitExceeded, InsufficientRolePermissions, InternalError, InvalidSecurityGroup, InvalidSubnet, SubnetOutOfIPAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network connector. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z-&#93;*:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:network-connector:&#91;a-zA-Z0-9-_&#93;+(:&#91;1-9&#93;|&#91;1-9&#93;&#91;0-9&#93;+)?)|&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operator_role" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that Lambda uses to manage the underlying ENI resources for this connector. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the network connector. (PENDING, ACTIVE, INACTIVE, FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of the current state, populated when the state is FAILED or DELETE_FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason_code" /></td>
    <td><code>string</code></td>
    <td>A machine-readable code indicating the reason for the current state. Use this for programmatic error handling. (DisallowedByVpcEncryptionControl, Ec2RequestLimitExceeded, InsufficientRolePermissions, InternalError, InvalidSecurityGroup, InvalidSubnet, SubnetOutOfIPAddresses)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the connector configuration, incremented on each update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_connectors">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network connector. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z-&#93;*:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:network-connector:&#91;a-zA-Z0-9-_&#93;+(:&#91;1-9&#93;|&#91;1-9&#93;&#91;0-9&#93;+)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for a network connector, assigned by the service at creation time</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the connector was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network connector. (pattern: &lt;code&gt;(arn:aws&#91;a-zA-Z-&#93;*:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:network-connector:&#91;a-zA-Z0-9-_&#93;+(:&#91;1-9&#93;|&#91;1-9&#93;&#91;0-9&#93;+)?)|&#91;a-zA-Z0-9_-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the network connector. (PENDING, ACTIVE, INACTIVE, FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the network connector (VPC_EGRESS). (VPC_EGRESS)</td>
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
    <td><a href="#get_network_connector"><CopyableCode code="get_network_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current configuration, state, and metadata of a network connector. The Identifier parameter accepts the connector ID, name, or full ARN. Use this operation to poll connector state after creation or update, or to inspect the current VPC configuration and any failure reasons. The response includes the full connector configuration, current state, and — if the connector has been updated — the LastUpdateStatus and LastUpdateStatusReasonCode fields that indicate whether the most recent update succeeded or failed.</td>
</tr>
<tr>
    <td><a href="#list_network_connectors"><CopyableCode code="list_network_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-State"><code>State</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a paginated list of network connectors in your account for the current Region. You can optionally filter results by connector state. Use the Marker parameter from a previous response to retrieve the next page of results. Each item in the response includes the connector ARN, name, ID, type, current state, and last modified timestamp. To retrieve full configuration details for a specific connector, use GetNetworkConnector.</td>
</tr>
<tr>
    <td><a href="#create_network_connector"><CopyableCode code="create_network_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a network connector that enables Lambda compute resources to route outbound traffic through your Amazon VPC. The network connector provisions elastic network interfaces (ENIs) in the subnets you specify, providing a managed network path to private resources such as databases, caches, and internal APIs. This operation is asynchronous. The network connector starts in PENDING state while ENIs are provisioned in your VPC (provisioning typically takes up to 10 minutes). Use GetNetworkConnector to poll the connector state until it reaches ACTIVE. Once active, you can attach the connector to Lambda MicroVMs at run time using the egressNetworkConnectors parameter on RunMicroVm. This operation is idempotent when you provide a ClientToken — if you retry a request that completed successfully using the same client token, the operation returns the existing connector without creating a duplicate.</td>
</tr>
<tr>
    <td><a href="#update_network_connector"><CopyableCode code="update_network_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the VPC configuration or operator role of an existing network connector. You can modify the subnet IDs, security group IDs, network protocol, or operator role. The connector must be in ACTIVE state to accept updates. This operation is asynchronous. The connector remains in ACTIVE state during the update — existing workloads that reference this connector are not disrupted. Use GetNetworkConnector to monitor the LastUpdateStatus field, which transitions through InProgress to Successful or Failed. If the update fails, the LastUpdateStatusReasonCode field provides a specific error code for troubleshooting. This operation is idempotent when you provide a ClientToken.</td>
</tr>
<tr>
    <td><a href="#delete_network_connector"><CopyableCode code="delete_network_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates deletion of a network connector. The connector transitions to DELETING state while elastic network interfaces are cleaned up asynchronously. After deletion completes, subsequent calls to GetNetworkConnector return ResourceNotFoundException. This operation is idempotent — calling delete on a connector that is already deleting or has been deleted succeeds without error. You can delete connectors in ACTIVE or FAILED states. Before deleting a connector, ensure that no Lambda MicroVMs are using it, as they will lose VPC egress connectivity immediately.</td>
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
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous ListNetworkConnectors response. Use this value to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of connectors to return per page. Valid range: 1 to 100.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Optional filter to return only connectors in the specified state (for example, ACTIVE or FAILED).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_connector"
    values={[
        { label: 'get_network_connector', value: 'get_network_connector' },
        { label: 'list_network_connectors', value: 'list_network_connectors' }
    ]}
>
<TabItem value="get_network_connector">

Retrieves the current configuration, state, and metadata of a network connector. The Identifier parameter accepts the connector ID, name, or full ARN. Use this operation to poll connector state after creation or update, or to inspect the current VPC configuration and any failure reasons. The response includes the full connector configuration, current state, and — if the connector has been updated — the LastUpdateStatus and LastUpdateStatusReasonCode fields that indicate whether the most recent update succeeded or failed.

```sql
SELECT
arn,
configuration,
id,
last_modified,
last_update_status,
last_update_status_reason,
last_update_status_reason_code,
name,
operator_role,
state,
state_reason,
state_reason_code,
version
FROM aws.lambda_core.network_connectors
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_network_connectors">

Returns a paginated list of network connectors in your account for the current Region. You can optionally filter results by connector state. Use the Marker parameter from a previous response to retrieve the next page of results. Each item in the response includes the connector ARN, name, ID, type, current state, and last modified timestamp. To retrieve full configuration details for a specific connector, use GetNetworkConnector.

```sql
SELECT
arn,
id,
last_modified,
name,
state,
type
FROM aws.lambda_core.network_connectors
WHERE region = '{{ region }}' -- required
AND State = '{{ State }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_connector"
    values={[
        { label: 'create_network_connector', value: 'create_network_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_connector">

Creates a network connector that enables Lambda compute resources to route outbound traffic through your Amazon VPC. The network connector provisions elastic network interfaces (ENIs) in the subnets you specify, providing a managed network path to private resources such as databases, caches, and internal APIs. This operation is asynchronous. The network connector starts in PENDING state while ENIs are provisioned in your VPC (provisioning typically takes up to 10 minutes). Use GetNetworkConnector to poll the connector state until it reaches ACTIVE. Once active, you can attach the connector to Lambda MicroVMs at run time using the egressNetworkConnectors parameter on RunMicroVm. This operation is idempotent when you provide a ClientToken — if you retry a request that completed successfully using the same client token, the operation returns the existing connector without creating a duplicate.

```sql
INSERT INTO aws.lambda_core.network_connectors (
Name,
Configuration,
OperatorRole,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Configuration }}',
'{{ OperatorRole }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
configuration,
id,
name,
operator_role,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_connectors resource.
    - name: Name
      value: "{{ Name }}"
    - name: Configuration
      description: |
        The network configuration for a network connector. Different connector types use different configuration shapes; specify the configuration that matches your connector type.
      value:
        VpcEgressConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          NetworkProtocol: "{{ NetworkProtocol }}"
          AssociatedComputeResourceTypes:
            - "{{ AssociatedComputeResourceTypes }}"
    - name: OperatorRole
      value: "{{ OperatorRole }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_connector"
    values={[
        { label: 'update_network_connector', value: 'update_network_connector' }
    ]}
>
<TabItem value="update_network_connector">

Updates the VPC configuration or operator role of an existing network connector. You can modify the subnet IDs, security group IDs, network protocol, or operator role. The connector must be in ACTIVE state to accept updates. This operation is asynchronous. The connector remains in ACTIVE state during the update — existing workloads that reference this connector are not disrupted. Use GetNetworkConnector to monitor the LastUpdateStatus field, which transitions through InProgress to Successful or Failed. If the update fails, the LastUpdateStatusReasonCode field provides a specific error code for troubleshooting. This operation is idempotent when you provide a ClientToken.

```sql
UPDATE aws.lambda_core.network_connectors
SET 
Configuration = '{{ Configuration }}',
OperatorRole = '{{ OperatorRole }}',
ClientToken = '{{ ClientToken }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
configuration,
id,
last_modified,
last_update_status,
last_update_status_reason,
name,
operator_role,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_connector"
    values={[
        { label: 'delete_network_connector', value: 'delete_network_connector' }
    ]}
>
<TabItem value="delete_network_connector">

Initiates deletion of a network connector. The connector transitions to DELETING state while elastic network interfaces are cleaned up asynchronously. After deletion completes, subsequent calls to GetNetworkConnector return ResourceNotFoundException. This operation is idempotent — calling delete on a connector that is already deleting or has been deleted succeeds without error. You can delete connectors in ACTIVE or FAILED states. Before deleting a connector, ensure that no Lambda MicroVMs are using it, as they will lose VPC egress connectivity immediately.

```sql
DELETE FROM aws.lambda_core.network_connectors
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
