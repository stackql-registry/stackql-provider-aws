--- 
title: brokers
hide_title: false
hide_table_of_contents: false
keywords:
  - brokers
  - mq
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

Creates, updates, deletes, gets or lists a <code>brokers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="brokers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mq.brokers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_broker"
    values={[
        { label: 'describe_broker', value: 'describe_broker' },
        { label: 'list_brokers', value: 'list_brokers' }
    ]}
>
<TabItem value="describe_broker">

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
    <td><CopyableCode code="actions_required" /></td>
    <td><code>array</code></td>
    <td>Actions required for a broker.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_strategy" /></td>
    <td><code>string</code></td>
    <td>Optional. The authentication strategy used to secure the broker. The default is SIMPLE. (SIMPLE, LDAP, CONFIG_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_minor_version_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_arn" /></td>
    <td><code>string</code></td>
    <td>The broker's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="broker_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_instances" /></td>
    <td><code>array</code></td>
    <td>A list of information about allocated brokers.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_name" /></td>
    <td><code>string</code></td>
    <td>The broker's name. This value must be unique in your Amazon Web Services account account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_state" /></td>
    <td><code>string</code></td>
    <td>The broker's status. (CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS, CRITICAL_ACTION_REQUIRED, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>object</code></td>
    <td>The list of all revisions for the specified configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the broker was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_replication_metadata" /></td>
    <td><code>object</code></td>
    <td>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.</td>
</tr>
<tr>
    <td><CopyableCode code="data_replication_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a broker is a part of a data replication pair. (NONE, CRDR)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_mode" /></td>
    <td><code>string</code></td>
    <td>The broker's deployment mode. (SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ, CLUSTER_MULTI_AZ)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_options" /></td>
    <td><code>object</code></td>
    <td>Encryption options for the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ. (ACTIVEMQ, RABBITMQ)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The broker engine version. For more information, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="host_instance_type" /></td>
    <td><code>string</code></td>
    <td>The broker's instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_server_metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the LDAP server used to authenticate and authorize connections to the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>object</code></td>
    <td>The list of information about logs currently enabled and pending to be deployed for the specified broker.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_window_start_time" /></td>
    <td><code>object</code></td>
    <td>The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_authentication_strategy" /></td>
    <td><code>string</code></td>
    <td>Optional. The authentication strategy used to secure the broker. The default is SIMPLE. (SIMPLE, LDAP, CONFIG_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_data_replication_metadata" /></td>
    <td><code>object</code></td>
    <td>The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_data_replication_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a broker is a part of a data replication pair. (NONE, CRDR)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_engine_version" /></td>
    <td><code>string</code></td>
    <td>The broker engine version to upgrade to. For more information, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_host_instance_type" /></td>
    <td><code>string</code></td>
    <td>The broker's host instance type to upgrade to. For a list of supported instance types, see Broker instance types.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_ldap_server_metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_security_groups" /></td>
    <td><code>array</code></td>
    <td>The list of pending security groups to authorize connections to brokers.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_accessible" /></td>
    <td><code>boolean</code></td>
    <td>Enables connections from applications outside of the VPC that hosts the broker's subnets.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>array</code></td>
    <td>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The broker's storage type. EFS is not supported for RabbitMQ engine type. (EBS, EFS)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of all tags associated with this broker.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>The list of all broker usernames for the specified broker.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_brokers">

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
    <td><CopyableCode code="broker_arn" /></td>
    <td><code>string</code></td>
    <td>The broker's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="broker_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_name" /></td>
    <td><code>string</code></td>
    <td>The broker's name. This value is unique in your Amazon Web Services account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</td>
</tr>
<tr>
    <td><CopyableCode code="broker_state" /></td>
    <td><code>string</code></td>
    <td>The broker's status. (CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS, CRITICAL_ACTION_REQUIRED, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the broker was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_mode" /></td>
    <td><code>string</code></td>
    <td>The broker's deployment mode. (SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ, CLUSTER_MULTI_AZ)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_type" /></td>
    <td><code>string</code></td>
    <td>The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ. (ACTIVEMQ, RABBITMQ)</td>
</tr>
<tr>
    <td><CopyableCode code="host_instance_type" /></td>
    <td><code>string</code></td>
    <td>The broker's instance type.</td>
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
    <td><a href="#describe_broker"><CopyableCode code="describe_broker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified broker.</td>
</tr>
<tr>
    <td><a href="#list_brokers"><CopyableCode code="list_brokers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all brokers.</td>
</tr>
<tr>
    <td><a href="#create_broker"><CopyableCode code="create_broker" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BrokerName"><code>BrokerName</code></a>, <a href="#parameter-DeploymentMode"><code>DeploymentMode</code></a>, <a href="#parameter-EngineType"><code>EngineType</code></a>, <a href="#parameter-HostInstanceType"><code>HostInstanceType</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a></td>
    <td></td>
    <td>Creates a broker. Note: This API is asynchronous. To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy. ec2:CreateNetworkInterface This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account. ec2:CreateNetworkInterfacePermission This permission is required to attach the ENI to the broker instance. ec2:DeleteNetworkInterface ec2:DeleteNetworkInterfacePermission ec2:DetachNetworkInterface ec2:DescribeInternetGateways ec2:DescribeNetworkInterfaces ec2:DescribeNetworkInterfacePermissions ec2:DescribeRouteTables ec2:DescribeSecurityGroups ec2:DescribeSubnets ec2:DescribeVpcs For more information, see Create an IAM User and Get Your Amazon Web Services Credentials and Never Modify or Delete the Amazon MQ Elastic Network Interface in the Amazon MQ Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_broker"><CopyableCode code="update_broker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a pending configuration change to a broker.</td>
</tr>
<tr>
    <td><a href="#delete_broker"><CopyableCode code="delete_broker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a broker. Note: This API is asynchronous.</td>
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
<tr id="parameter-broker-id">
    <td><CopyableCode code="broker-id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_broker"
    values={[
        { label: 'describe_broker', value: 'describe_broker' },
        { label: 'list_brokers', value: 'list_brokers' }
    ]}
>
<TabItem value="describe_broker">

Returns information about the specified broker.

```sql
SELECT
actions_required,
authentication_strategy,
auto_minor_version_upgrade,
broker_arn,
broker_id,
broker_instances,
broker_name,
broker_state,
configurations,
created,
data_replication_metadata,
data_replication_mode,
deployment_mode,
encryption_options,
engine_type,
engine_version,
host_instance_type,
ldap_server_metadata,
logs,
maintenance_window_start_time,
pending_authentication_strategy,
pending_data_replication_metadata,
pending_data_replication_mode,
pending_engine_version,
pending_host_instance_type,
pending_ldap_server_metadata,
pending_security_groups,
publicly_accessible,
security_groups,
storage_type,
subnet_ids,
tags,
users
FROM aws.mq.brokers
WHERE `broker-id` = '{{ broker-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_brokers">

Returns a list of all brokers.

```sql
SELECT
broker_arn,
broker_id,
broker_name,
broker_state,
created,
deployment_mode,
engine_type,
host_instance_type
FROM aws.mq.brokers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_broker"
    values={[
        { label: 'create_broker', value: 'create_broker' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_broker">

Creates a broker. Note: This API is asynchronous. To create a broker, you must either use the AmazonMQFullAccess IAM policy or include the following EC2 permissions in your IAM policy. ec2:CreateNetworkInterface This permission is required to allow Amazon MQ to create an elastic network interface (ENI) on behalf of your account. ec2:CreateNetworkInterfacePermission This permission is required to attach the ENI to the broker instance. ec2:DeleteNetworkInterface ec2:DeleteNetworkInterfacePermission ec2:DetachNetworkInterface ec2:DescribeInternetGateways ec2:DescribeNetworkInterfaces ec2:DescribeNetworkInterfacePermissions ec2:DescribeRouteTables ec2:DescribeSecurityGroups ec2:DescribeSubnets ec2:DescribeVpcs For more information, see Create an IAM User and Get Your Amazon Web Services Credentials and Never Modify or Delete the Amazon MQ Elastic Network Interface in the Amazon MQ Developer Guide.

```sql
INSERT INTO aws.mq.brokers (
AuthenticationStrategy,
AutoMinorVersionUpgrade,
BrokerName,
Configuration,
CreatorRequestId,
DeploymentMode,
EncryptionOptions,
EngineType,
EngineVersion,
HostInstanceType,
LdapServerMetadata,
Logs,
MaintenanceWindowStartTime,
PubliclyAccessible,
SecurityGroups,
StorageType,
SubnetIds,
Tags,
Users,
DataReplicationMode,
DataReplicationPrimaryBrokerArn,
region
)
SELECT 
'{{ AuthenticationStrategy }}',
{{ AutoMinorVersionUpgrade }},
'{{ BrokerName }}' /* required */,
'{{ Configuration }}',
'{{ CreatorRequestId }}',
'{{ DeploymentMode }}' /* required */,
'{{ EncryptionOptions }}',
'{{ EngineType }}' /* required */,
'{{ EngineVersion }}',
'{{ HostInstanceType }}' /* required */,
'{{ LdapServerMetadata }}',
'{{ Logs }}',
'{{ MaintenanceWindowStartTime }}',
{{ PubliclyAccessible }} /* required */,
'{{ SecurityGroups }}',
'{{ StorageType }}',
'{{ SubnetIds }}',
'{{ Tags }}',
'{{ Users }}',
'{{ DataReplicationMode }}',
'{{ DataReplicationPrimaryBrokerArn }}',
'{{ region }}'
RETURNING
broker_arn,
broker_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: brokers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the brokers resource.
    - name: AuthenticationStrategy
      value: "{{ AuthenticationStrategy }}"
      description: |
        Optional. The authentication strategy used to secure the broker. The default is SIMPLE.
      valid_values: ['SIMPLE', 'LDAP', 'CONFIG_MANAGED']
    - name: AutoMinorVersionUpgrade
      value: {{ AutoMinorVersionUpgrade }}
    - name: BrokerName
      value: "{{ BrokerName }}"
    - name: Configuration
      description: |
        A list of information about the configuration.
      value:
        Id: "{{ Id }}"
        Revision: {{ Revision }}
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
    - name: DeploymentMode
      value: "{{ DeploymentMode }}"
      description: |
        The broker's deployment mode.
      valid_values: ['SINGLE_INSTANCE', 'ACTIVE_STANDBY_MULTI_AZ', 'CLUSTER_MULTI_AZ']
    - name: EncryptionOptions
      description: |
        Encryption options for the broker.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
        UseAwsOwnedKey: {{ UseAwsOwnedKey }}
    - name: EngineType
      value: "{{ EngineType }}"
      description: |
        The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
      valid_values: ['ACTIVEMQ', 'RABBITMQ']
    - name: EngineVersion
      value: "{{ EngineVersion }}"
    - name: HostInstanceType
      value: "{{ HostInstanceType }}"
    - name: LdapServerMetadata
      description: |
        Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
      value:
        Hosts:
          - "{{ Hosts }}"
        RoleBase: "{{ RoleBase }}"
        RoleName: "{{ RoleName }}"
        RoleSearchMatching: "{{ RoleSearchMatching }}"
        RoleSearchSubtree: {{ RoleSearchSubtree }}
        ServiceAccountPassword: "{{ ServiceAccountPassword }}"
        ServiceAccountUsername: "{{ ServiceAccountUsername }}"
        UserBase: "{{ UserBase }}"
        UserRoleName: "{{ UserRoleName }}"
        UserSearchMatching: "{{ UserSearchMatching }}"
        UserSearchSubtree: {{ UserSearchSubtree }}
    - name: Logs
      description: |
        The list of information about logs to be enabled for the specified broker.
      value:
        Audit: {{ Audit }}
        General: {{ General }}
    - name: MaintenanceWindowStartTime
      description: |
        The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
      value:
        DayOfWeek: "{{ DayOfWeek }}"
        TimeOfDay: "{{ TimeOfDay }}"
        TimeZone: "{{ TimeZone }}"
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
    - name: SecurityGroups
      value:
        - "{{ SecurityGroups }}"
    - name: StorageType
      value: "{{ StorageType }}"
      description: |
        The broker's storage type. EFS is not supported for RabbitMQ engine type.
      valid_values: ['EBS', 'EFS']
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Users
      value:
        - ConsoleAccess: {{ ConsoleAccess }}
          Groups: "{{ Groups }}"
          Password: "{{ Password }}"
          Username: "{{ Username }}"
          ReplicationUser: {{ ReplicationUser }}
    - name: DataReplicationMode
      value: "{{ DataReplicationMode }}"
      description: |
        Specifies whether a broker is a part of a data replication pair.
      valid_values: ['NONE', 'CRDR']
    - name: DataReplicationPrimaryBrokerArn
      value: "{{ DataReplicationPrimaryBrokerArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_broker"
    values={[
        { label: 'update_broker', value: 'update_broker' }
    ]}
>
<TabItem value="update_broker">

Adds a pending configuration change to a broker.

```sql
UPDATE aws.mq.brokers
SET 
AuthenticationStrategy = '{{ AuthenticationStrategy }}',
AutoMinorVersionUpgrade = {{ AutoMinorVersionUpgrade }},
Configuration = '{{ Configuration }}',
EngineVersion = '{{ EngineVersion }}',
HostInstanceType = '{{ HostInstanceType }}',
LdapServerMetadata = '{{ LdapServerMetadata }}',
Logs = '{{ Logs }}',
MaintenanceWindowStartTime = '{{ MaintenanceWindowStartTime }}',
SecurityGroups = '{{ SecurityGroups }}',
DataReplicationMode = '{{ DataReplicationMode }}'
WHERE 
`broker-id` = '{{ broker-id }}' --required
AND region = '{{ region }}' --required
RETURNING
authentication_strategy,
auto_minor_version_upgrade,
broker_id,
configuration,
data_replication_metadata,
data_replication_mode,
engine_version,
host_instance_type,
ldap_server_metadata,
logs,
maintenance_window_start_time,
pending_data_replication_metadata,
pending_data_replication_mode,
security_groups;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_broker"
    values={[
        { label: 'delete_broker', value: 'delete_broker' }
    ]}
>
<TabItem value="delete_broker">

Deletes a broker. Note: This API is asynchronous.

```sql
DELETE FROM aws.mq.brokers
WHERE `broker-id` = '{{ broker-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
