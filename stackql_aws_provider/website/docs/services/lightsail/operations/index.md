--- 
title: operations
hide_title: false
hide_table_of_contents: false
keywords:
  - operations
  - lightsail
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

Creates, updates, deletes, gets or lists an <code>operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'get_operations', value: 'get_operations' }
    ]}
>
<TabItem value="get_operation">

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
    <td>The ID of the operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the operation was initialized (1479816991.349).</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>The error code.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>string</code></td>
    <td>The error details.</td>
</tr>
<tr>
    <td><CopyableCode code="isTerminal" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the operation is terminal.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services Region and Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="operationDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the operation (Debian-1GB-Ohio-1).</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of operation. (DeleteKnownHostKeys, DeleteInstance, CreateInstance, StopInstance, StartInstance, RebootInstance, OpenInstancePublicPorts, PutInstancePublicPorts, CloseInstancePublicPorts, AllocateStaticIp, ReleaseStaticIp, AttachStaticIp, DetachStaticIp, UpdateDomainEntry, DeleteDomainEntry, CreateDomain, DeleteDomain, CreateInstanceSnapshot, DeleteInstanceSnapshot, CreateInstancesFromSnapshot, CreateLoadBalancer, DeleteLoadBalancer, AttachInstancesToLoadBalancer, DetachInstancesFromLoadBalancer, UpdateLoadBalancerAttribute, CreateLoadBalancerTlsCertificate, DeleteLoadBalancerTlsCertificate, AttachLoadBalancerTlsCertificate, CreateDisk, DeleteDisk, AttachDisk, DetachDisk, CreateDiskSnapshot, DeleteDiskSnapshot, CreateDiskFromSnapshot, CreateRelationalDatabase, UpdateRelationalDatabase, DeleteRelationalDatabase, CreateRelationalDatabaseFromSnapshot, CreateRelationalDatabaseSnapshot, DeleteRelationalDatabaseSnapshot, UpdateRelationalDatabaseParameters, StartRelationalDatabase, RebootRelationalDatabase, StopRelationalDatabase, EnableAddOn, DisableAddOn, PutAlarm, GetAlarms, DeleteAlarm, TestAlarm, CreateContactMethod, GetContactMethods, SendContactMethodVerification, DeleteContactMethod, CreateDistribution, UpdateDistribution, DeleteDistribution, ResetDistributionCache, AttachCertificateToDistribution, DetachCertificateFromDistribution, UpdateDistributionBundle, SetIpAddressType, CreateCertificate, DeleteCertificate, CreateContainerService, UpdateContainerService, DeleteContainerService, CreateContainerServiceDeployment, CreateContainerServiceRegistryLogin, RegisterContainerImage, DeleteContainerImage, CreateBucket, DeleteBucket, CreateBucketAccessKey, DeleteBucketAccessKey, UpdateBucketBundle, UpdateBucket, SetResourceAccessForBucket, UpdateInstanceMetadataOptions, StartGUISession, StopGUISession, SetupInstanceHttps)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>The resource name. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (NotStarted, Started, Failed, Completed, Succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="statusChangedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the status was changed (1479816991.349).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_operations">

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
    <td>The ID of the operation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the operation was initialized (1479816991.349).</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>The error code.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDetails" /></td>
    <td><code>string</code></td>
    <td>The error details.</td>
</tr>
<tr>
    <td><CopyableCode code="isTerminal" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the operation is terminal.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services Region and Availability Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="operationDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the operation (Debian-1GB-Ohio-1).</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of operation. (DeleteKnownHostKeys, DeleteInstance, CreateInstance, StopInstance, StartInstance, RebootInstance, OpenInstancePublicPorts, PutInstancePublicPorts, CloseInstancePublicPorts, AllocateStaticIp, ReleaseStaticIp, AttachStaticIp, DetachStaticIp, UpdateDomainEntry, DeleteDomainEntry, CreateDomain, DeleteDomain, CreateInstanceSnapshot, DeleteInstanceSnapshot, CreateInstancesFromSnapshot, CreateLoadBalancer, DeleteLoadBalancer, AttachInstancesToLoadBalancer, DetachInstancesFromLoadBalancer, UpdateLoadBalancerAttribute, CreateLoadBalancerTlsCertificate, DeleteLoadBalancerTlsCertificate, AttachLoadBalancerTlsCertificate, CreateDisk, DeleteDisk, AttachDisk, DetachDisk, CreateDiskSnapshot, DeleteDiskSnapshot, CreateDiskFromSnapshot, CreateRelationalDatabase, UpdateRelationalDatabase, DeleteRelationalDatabase, CreateRelationalDatabaseFromSnapshot, CreateRelationalDatabaseSnapshot, DeleteRelationalDatabaseSnapshot, UpdateRelationalDatabaseParameters, StartRelationalDatabase, RebootRelationalDatabase, StopRelationalDatabase, EnableAddOn, DisableAddOn, PutAlarm, GetAlarms, DeleteAlarm, TestAlarm, CreateContactMethod, GetContactMethods, SendContactMethodVerification, DeleteContactMethod, CreateDistribution, UpdateDistribution, DeleteDistribution, ResetDistributionCache, AttachCertificateToDistribution, DetachCertificateFromDistribution, UpdateDistributionBundle, SetIpAddressType, CreateCertificate, DeleteCertificate, CreateContainerService, UpdateContainerService, DeleteContainerService, CreateContainerServiceDeployment, CreateContainerServiceRegistryLogin, RegisterContainerImage, DeleteContainerImage, CreateBucket, DeleteBucket, CreateBucketAccessKey, DeleteBucketAccessKey, UpdateBucketBundle, UpdateBucket, SetResourceAccessForBucket, UpdateInstanceMetadataOptions, StartGUISession, StopGUISession, SetupInstanceHttps)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>The resource name. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the operation. (NotStarted, Started, Failed, Completed, Succeeded)</td>
</tr>
<tr>
    <td><CopyableCode code="statusChangedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the status was changed (1479816991.349).</td>
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
    <td><a href="#get_operation"><CopyableCode code="get_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.</td>
</tr>
<tr>
    <td><a href="#get_operations"><CopyableCode code="get_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.</td>
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
    defaultValue="get_operation"
    values={[
        { label: 'get_operation', value: 'get_operation' },
        { label: 'get_operations', value: 'get_operations' }
    ]}
>
<TabItem value="get_operation">

Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.

```sql
SELECT
id,
createdAt,
errorCode,
errorDetails,
isTerminal,
location,
operationDetails,
operationType,
resourceName,
resourceType,
status,
statusChangedAt
FROM aws.lightsail.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_operations">

Returns information about all operations. Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to GetOperations use the maximum (last) statusChangedAt value from the previous request.

```sql
SELECT
id,
createdAt,
errorCode,
errorDetails,
isTerminal,
location,
operationDetails,
operationType,
resourceName,
resourceType,
status,
statusChangedAt
FROM aws.lightsail.operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
