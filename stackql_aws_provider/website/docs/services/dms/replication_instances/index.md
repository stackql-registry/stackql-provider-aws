--- 
title: replication_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_instances
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_instances"
    values={[
        { label: 'describe_replication_instances', value: 'describe_replication_instances' }
    ]}
>
<TabItem value="describe_replication_instances">

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
    <td><CopyableCode code="allocated_storage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage (in gigabytes) that is allocated for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value indicating if minor version upgrades will be automatically applied to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name_servers" /></td>
    <td><code>string</code></td>
    <td>The DNS name servers supported for the replication instance to access your on-premise source or target database.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available. When modifying a major engine version of an instance, also set AllowMajorVersionUpgrade to true.</td>
</tr>
<tr>
    <td><CopyableCode code="free_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date of the free replication instance that is part of the Free DMS program.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the replication instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="kerberos_authentication_settings" /></td>
    <td><code>object</code></td>
    <td>Specifies the settings required for kerberos authentication when replicating an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_modified_values" /></td>
    <td><code>object</code></td>
    <td>The pending modification values.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_maintenance_window" /></td>
    <td><code>string</code></td>
    <td>The maintenance window times for the replication instance. Any pending upgrades to the replication instance are performed during this time.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_class" /></td>
    <td><code>string</code></td>
    <td>The compute and memory capacity of the replication instance as defined for the specified replication instance class. It is a required parameter, although a default value is pre-selected in the DMS console. For more information on the settings and capacities for the available replication instance classes, see Selecting the right DMS replication instance for your migration.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_identifier" /></td>
    <td><code>string</code></td>
    <td>The replication instance identifier is a required parameter. This parameter is stored as a lowercase string. Constraints: Must contain 1-63 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: myrepinstance</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_ipv_6_addresses" /></td>
    <td><code>array</code></td>
    <td>One or more IPv6 addresses for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_private_ip_address" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_private_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>One or more private IP addresses for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_public_ip_address" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_public_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>One or more public IP addresses for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_instance_status" /></td>
    <td><code>string</code></td>
    <td>The status of the replication instance. The possible return values include: "available" "creating" "deleted" "deleting" "failed" "modifying" "upgrading" "rebooting" "resetting-master-credentials" "storage-full" "incompatible-credentials" "incompatible-network" "maintenance"</td>
</tr>
<tr>
    <td><CopyableCode code="replication_subnet_group" /></td>
    <td><code>object</code></td>
    <td>The subnet group for the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the standby replication instance in a Multi-AZ deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>array</code></td>
    <td>The VPC security group for the instance.</td>
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
    <td><a href="#describe_replication_instances"><CopyableCode code="describe_replication_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about replication instances for your account in the current region.</td>
</tr>
<tr>
    <td><a href="#create_replication_instance"><CopyableCode code="create_replication_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationInstanceIdentifier"><code>ReplicationInstanceIdentifier</code></a>, <a href="#parameter-ReplicationInstanceClass"><code>ReplicationInstanceClass</code></a></td>
    <td></td>
    <td>Creates the replication instance using the specified parameters. DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on the required permissions, see IAM Permissions Needed to Use DMS. If you don't specify a version when creating a replication instance, DMS will create the instance using the default engine version. For information about the default engine version, see Release Notes.</td>
</tr>
<tr>
    <td><a href="#modify_replication_instance"><CopyableCode code="modify_replication_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a></td>
    <td></td>
    <td>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window.</td>
</tr>
<tr>
    <td><a href="#delete_replication_instance"><CopyableCode code="delete_replication_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified replication instance. You must delete any migration tasks that are associated with the replication instance before you can delete it.</td>
</tr>
<tr>
    <td><a href="#apply_pending_maintenance_action"><CopyableCode code="apply_pending_maintenance_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a>, <a href="#parameter-ApplyAction"><code>ApplyAction</code></a>, <a href="#parameter-OptInType"><code>OptInType</code></a></td>
    <td></td>
    <td>Applies a pending maintenance action to a resource (for example, to a replication instance).</td>
</tr>
<tr>
    <td><a href="#test_connection"><CopyableCode code="test_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a>, <a href="#parameter-EndpointArn"><code>EndpointArn</code></a></td>
    <td></td>
    <td>Tests the connection between the replication instance and the endpoint.</td>
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
    defaultValue="describe_replication_instances"
    values={[
        { label: 'describe_replication_instances', value: 'describe_replication_instances' }
    ]}
>
<TabItem value="describe_replication_instances">

Returns information about replication instances for your account in the current region.

```sql
SELECT
allocated_storage,
auto_minor_version_upgrade,
availability_zone,
dns_name_servers,
engine_version,
free_until,
instance_create_time,
kerberos_authentication_settings,
kms_key_id,
multi_az,
network_type,
pending_modified_values,
preferred_maintenance_window,
publicly_accessible,
replication_instance_arn,
replication_instance_class,
replication_instance_identifier,
replication_instance_ipv_6_addresses,
replication_instance_private_ip_address,
replication_instance_private_ip_addresses,
replication_instance_public_ip_address,
replication_instance_public_ip_addresses,
replication_instance_status,
replication_subnet_group,
secondary_availability_zone,
vpc_security_groups
FROM aws.dms.replication_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_instance"
    values={[
        { label: 'create_replication_instance', value: 'create_replication_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_instance">

Creates the replication instance using the specified parameters. DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on the required permissions, see IAM Permissions Needed to Use DMS. If you don't specify a version when creating a replication instance, DMS will create the instance using the default engine version. For information about the default engine version, see Release Notes.

```sql
INSERT INTO aws.dms.replication_instances (
ReplicationInstanceIdentifier,
AllocatedStorage,
ReplicationInstanceClass,
VpcSecurityGroupIds,
AvailabilityZone,
ReplicationSubnetGroupIdentifier,
PreferredMaintenanceWindow,
MultiAZ,
EngineVersion,
AutoMinorVersionUpgrade,
Tags,
KmsKeyId,
PubliclyAccessible,
DnsNameServers,
ResourceIdentifier,
NetworkType,
KerberosAuthenticationSettings,
region
)
SELECT 
'{{ ReplicationInstanceIdentifier }}' /* required */,
{{ AllocatedStorage }},
'{{ ReplicationInstanceClass }}' /* required */,
'{{ VpcSecurityGroupIds }}',
'{{ AvailabilityZone }}',
'{{ ReplicationSubnetGroupIdentifier }}',
'{{ PreferredMaintenanceWindow }}',
{{ MultiAZ }},
'{{ EngineVersion }}',
{{ AutoMinorVersionUpgrade }},
'{{ Tags }}',
'{{ KmsKeyId }}',
{{ PubliclyAccessible }},
'{{ DnsNameServers }}',
'{{ ResourceIdentifier }}',
'{{ NetworkType }}',
'{{ KerberosAuthenticationSettings }}',
'{{ region }}'
RETURNING
replication_instance
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_instances resource.
    - name: ReplicationInstanceIdentifier
      value: "{{ ReplicationInstanceIdentifier }}"
      description: |
        The replication instance identifier. This parameter is stored as a lowercase string. Constraints: Must contain 1-63 alphanumeric characters or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: myrepinstance
    - name: AllocatedStorage
      value: {{ AllocatedStorage }}
      description: |
        The amount of storage (in gigabytes) to be initially allocated for the replication instance.
    - name: ReplicationInstanceClass
      value: "{{ ReplicationInstanceClass }}"
      description: |
        The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see Choosing the right DMS replication instance; and, Selecting the best size for a replication instance.
    - name: VpcSecurityGroupIds
      value:
        - "{{ VpcSecurityGroupIds }}"
      description: |
        Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: |
        The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example: us-east-1d.
    - name: ReplicationSubnetGroupIdentifier
      value: "{{ ReplicationSubnetGroupIdentifier }}"
      description: |
        A subnet group to associate with the replication instance.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: |
        The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Format: ddd:hh24:mi-ddd:hh24:mi Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.
    - name: MultiAZ
      value: {{ MultiAZ }}
      description: |
        Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.
    - name: EngineVersion
      value: "{{ EngineVersion }}"
      description: |
        The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
      description: |
        A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to true. Default: true
    - name: Tags
      description: |
        One or more tags to be assigned to the replication instance.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: |
        Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true.
    - name: DnsNameServers
      value: "{{ DnsNameServers }}"
      description: |
        A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
      description: |
        A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
    - name: KerberosAuthenticationSettings
      description: |
        Specifies the settings required for kerberos authentication when creating the replication instance.
      value:
        KeyCacheSecretId: "{{ KeyCacheSecretId }}"
        KeyCacheSecretIamArn: "{{ KeyCacheSecretIamArn }}"
        Krb5FileContents: "{{ Krb5FileContents }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_replication_instance"
    values={[
        { label: 'modify_replication_instance', value: 'modify_replication_instance' }
    ]}
>
<TabItem value="modify_replication_instance">

Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window.

```sql
UPDATE aws.dms.replication_instances
SET 
ReplicationInstanceArn = '{{ ReplicationInstanceArn }}',
AllocatedStorage = {{ AllocatedStorage }},
ApplyImmediately = {{ ApplyImmediately }},
ReplicationInstanceClass = '{{ ReplicationInstanceClass }}',
VpcSecurityGroupIds = '{{ VpcSecurityGroupIds }}',
PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow }}',
MultiAZ = {{ MultiAZ }},
EngineVersion = '{{ EngineVersion }}',
AllowMajorVersionUpgrade = {{ AllowMajorVersionUpgrade }},
AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade }},
ReplicationInstanceIdentifier = '{{ ReplicationInstanceIdentifier }}',
NetworkType = '{{ NetworkType }}',
KerberosAuthenticationSettings = '{{ KerberosAuthenticationSettings }}'
WHERE 
region = '{{ region }}' --required
AND ReplicationInstanceArn = '{{ ReplicationInstanceArn }}' --required
RETURNING
replication_instance;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_instance"
    values={[
        { label: 'delete_replication_instance', value: 'delete_replication_instance' }
    ]}
>
<TabItem value="delete_replication_instance">

Deletes the specified replication instance. You must delete any migration tasks that are associated with the replication instance before you can delete it.

```sql
DELETE FROM aws.dms.replication_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_pending_maintenance_action"
    values={[
        { label: 'apply_pending_maintenance_action', value: 'apply_pending_maintenance_action' },
        { label: 'test_connection', value: 'test_connection' }
    ]}
>
<TabItem value="apply_pending_maintenance_action">

Applies a pending maintenance action to a resource (for example, to a replication instance).

```sql
EXEC aws.dms.replication_instances.apply_pending_maintenance_action 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationInstanceArn": "{{ ReplicationInstanceArn }}", 
"ApplyAction": "{{ ApplyAction }}", 
"OptInType": "{{ OptInType }}"
}'
;
```
</TabItem>
<TabItem value="test_connection">

Tests the connection between the replication instance and the endpoint.

```sql
EXEC aws.dms.replication_instances.test_connection 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationInstanceArn": "{{ ReplicationInstanceArn }}", 
"EndpointArn": "{{ EndpointArn }}"
}'
;
```
</TabItem>
</Tabs>
