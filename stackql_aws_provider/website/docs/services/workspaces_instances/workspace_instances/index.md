--- 
title: workspace_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_instances
  - workspaces_instances
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

Creates, updates, deletes, gets or lists a <code>workspace_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_instances.workspace_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workspace_instance"
    values={[
        { label: 'get_workspace_instance', value: 'get_workspace_instance' },
        { label: 'list_workspace_instances', value: 'list_workspace_instances' }
    ]}
>
<TabItem value="get_workspace_instance">

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
    <td><CopyableCode code="billing_configuration" /></td>
    <td><code>object</code></td>
    <td>Returns the current billing configuration for the WorkSpace Instance, indicating the active billing mode.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2_instance_errors" /></td>
    <td><code>array</code></td>
    <td>Includes any underlying EC2 instance errors encountered.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2_managed_instance" /></td>
    <td><code>object</code></td>
    <td>Details of the associated EC2 managed instance.</td>
</tr>
<tr>
    <td><CopyableCode code="provision_state" /></td>
    <td><code>string</code></td>
    <td>Current provisioning state of the WorkSpaces Instance. (ALLOCATING, ALLOCATED, DEALLOCATING, DEALLOCATED, ERROR_ALLOCATING, ERROR_DEALLOCATING)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_instance_errors" /></td>
    <td><code>array</code></td>
    <td>Captures any errors specific to the WorkSpace Instance lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_instance_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the retrieved WorkSpaces Instance. (pattern: &lt;code&gt;wsinst-&#91;0-9a-zA-Z&#93;&#123;8,63&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workspace_instances">

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
    <td><CopyableCode code="ec2_managed_instance" /></td>
    <td><code>object</code></td>
    <td>Details of the associated EC2 managed instance.</td>
</tr>
<tr>
    <td><CopyableCode code="provision_state" /></td>
    <td><code>string</code></td>
    <td>Current provisioning state of the WorkSpace Instance. (ALLOCATING, ALLOCATED, DEALLOCATING, DEALLOCATED, ERROR_ALLOCATING, ERROR_DEALLOCATING)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_instance_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the WorkSpace Instance. (pattern: &lt;code&gt;wsinst-&#91;0-9a-zA-Z&#93;&#123;8,63&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_workspace_instance"><CopyableCode code="get_workspace_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific WorkSpace Instance.</td>
</tr>
<tr>
    <td><a href="#list_workspace_instances"><CopyableCode code="list_workspace_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a collection of WorkSpaces Instances based on specified filters.</td>
</tr>
<tr>
    <td><a href="#create_workspace_instance"><CopyableCode code="create_workspace_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ManagedInstance"><code>ManagedInstance</code></a></td>
    <td></td>
    <td>Launches a new WorkSpace Instance with specified configuration parameters, enabling programmatic workspace deployment.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_instance"><CopyableCode code="delete_workspace_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified WorkSpace Usage of this API will result in deletion of the resource in question.</td>
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
    defaultValue="get_workspace_instance"
    values={[
        { label: 'get_workspace_instance', value: 'get_workspace_instance' },
        { label: 'list_workspace_instances', value: 'list_workspace_instances' }
    ]}
>
<TabItem value="get_workspace_instance">

Retrieves detailed information about a specific WorkSpace Instance.

```sql
SELECT
billing_configuration,
ec2_instance_errors,
ec2_managed_instance,
provision_state,
workspace_instance_errors,
workspace_instance_id
FROM aws.workspaces_instances.workspace_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspace_instances">

Retrieves a collection of WorkSpaces Instances based on specified filters.

```sql
SELECT
ec2_managed_instance,
provision_state,
workspace_instance_id
FROM aws.workspaces_instances.workspace_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_instance"
    values={[
        { label: 'create_workspace_instance', value: 'create_workspace_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_instance">

Launches a new WorkSpace Instance with specified configuration parameters, enabling programmatic workspace deployment.

```sql
INSERT INTO aws.workspaces_instances.workspace_instances (
ClientToken,
Tags,
ManagedInstance,
BillingConfiguration,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Tags }}',
'{{ ManagedInstance }}' /* required */,
'{{ BillingConfiguration }}',
'{{ region }}'
RETURNING
workspace_instance_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_instances resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique token to ensure idempotent instance creation, preventing duplicate workspace launches.
    - name: Tags
      description: |
        Optional metadata tags for categorizing and managing WorkSpaces Instances.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ManagedInstance
      description: |
        Comprehensive configuration settings for the WorkSpaces Instance, including network, compute, and storage parameters.
      value:
        BlockDeviceMappings:
          - DeviceName: "{{ DeviceName }}"
            Ebs:
              VolumeType: "{{ VolumeType }}"
              Encrypted: {{ Encrypted }}
              KmsKeyId: "{{ KmsKeyId }}"
              Iops: {{ Iops }}
              Throughput: {{ Throughput }}
              VolumeSize: {{ VolumeSize }}
            NoDevice: "{{ NoDevice }}"
            VirtualName: "{{ VirtualName }}"
        CapacityReservationSpecification:
          CapacityReservationPreference: "{{ CapacityReservationPreference }}"
          CapacityReservationTarget:
            CapacityReservationId: "{{ CapacityReservationId }}"
            CapacityReservationResourceGroupArn: "{{ CapacityReservationResourceGroupArn }}"
        CpuOptions:
          AmdSevSnp: "{{ AmdSevSnp }}"
          CoreCount: {{ CoreCount }}
          ThreadsPerCore: {{ ThreadsPerCore }}
        CreditSpecification:
          CpuCredits: "{{ CpuCredits }}"
        DisableApiStop: {{ DisableApiStop }}
        EbsOptimized: {{ EbsOptimized }}
        EnablePrimaryIpv6: {{ EnablePrimaryIpv6 }}
        EnclaveOptions:
          Enabled: {{ Enabled }}
        HibernationOptions:
          Configured: {{ Configured }}
        IamInstanceProfile:
          Arn: "{{ Arn }}"
          Name: "{{ Name }}"
        ImageId: "{{ ImageId }}"
        InstanceMarketOptions:
          MarketType: "{{ MarketType }}"
          SpotOptions:
            BlockDurationMinutes: {{ BlockDurationMinutes }}
            InstanceInterruptionBehavior: "{{ InstanceInterruptionBehavior }}"
            MaxPrice: "{{ MaxPrice }}"
            SpotInstanceType: "{{ SpotInstanceType }}"
            ValidUntilUtc: "{{ ValidUntilUtc }}"
        InstanceType: "{{ InstanceType }}"
        Ipv6Addresses:
          - Ipv6Address: "{{ Ipv6Address }}"
            IsPrimaryIpv6: {{ IsPrimaryIpv6 }}
        Ipv6AddressCount: {{ Ipv6AddressCount }}
        KernelId: "{{ KernelId }}"
        KeyName: "{{ KeyName }}"
        LicenseSpecifications:
          - LicenseConfigurationArn: "{{ LicenseConfigurationArn }}"
        MaintenanceOptions:
          AutoRecovery: "{{ AutoRecovery }}"
        MetadataOptions:
          HttpEndpoint: "{{ HttpEndpoint }}"
          HttpProtocolIpv6: "{{ HttpProtocolIpv6 }}"
          HttpPutResponseHopLimit: {{ HttpPutResponseHopLimit }}
          HttpTokens: "{{ HttpTokens }}"
          InstanceMetadataTags: "{{ InstanceMetadataTags }}"
        Monitoring:
          Enabled: {{ Enabled }}
        NetworkInterfaces:
          - AssociateCarrierIpAddress: {{ AssociateCarrierIpAddress }}
            AssociatePublicIpAddress: {{ AssociatePublicIpAddress }}
            ConnectionTrackingSpecification:
              TcpEstablishedTimeout: {{ TcpEstablishedTimeout }}
              UdpStreamTimeout: {{ UdpStreamTimeout }}
              UdpTimeout: {{ UdpTimeout }}
            Description: "{{ Description }}"
            DeviceIndex: {{ DeviceIndex }}
            EnaSrdSpecification:
              EnaSrdEnabled: {{ EnaSrdEnabled }}
              EnaSrdUdpSpecification:
                EnaSrdUdpEnabled: {{ EnaSrdUdpEnabled }}
            InterfaceType: "{{ InterfaceType }}"
            Ipv4Prefixes: "{{ Ipv4Prefixes }}"
            Ipv4PrefixCount: {{ Ipv4PrefixCount }}
            Ipv6AddressCount: {{ Ipv6AddressCount }}
            Ipv6Addresses: "{{ Ipv6Addresses }}"
            Ipv6Prefixes: "{{ Ipv6Prefixes }}"
            Ipv6PrefixCount: {{ Ipv6PrefixCount }}
            NetworkCardIndex: {{ NetworkCardIndex }}
            NetworkInterfaceId: "{{ NetworkInterfaceId }}"
            PrimaryIpv6: {{ PrimaryIpv6 }}
            PrivateIpAddress: "{{ PrivateIpAddress }}"
            PrivateIpAddresses: "{{ PrivateIpAddresses }}"
            SecondaryPrivateIpAddressCount: {{ SecondaryPrivateIpAddressCount }}
            Groups: "{{ Groups }}"
            SubnetId: "{{ SubnetId }}"
        NetworkPerformanceOptions:
          BandwidthWeighting: "{{ BandwidthWeighting }}"
        Placement:
          Affinity: "{{ Affinity }}"
          AvailabilityZone: "{{ AvailabilityZone }}"
          GroupId: "{{ GroupId }}"
          GroupName: "{{ GroupName }}"
          HostId: "{{ HostId }}"
          HostResourceGroupArn: "{{ HostResourceGroupArn }}"
          PartitionNumber: {{ PartitionNumber }}
          Tenancy: "{{ Tenancy }}"
        PrivateDnsNameOptions:
          HostnameType: "{{ HostnameType }}"
          EnableResourceNameDnsARecord: {{ EnableResourceNameDnsARecord }}
          EnableResourceNameDnsAAAARecord: {{ EnableResourceNameDnsAAAARecord }}
        PrivateIpAddress: "{{ PrivateIpAddress }}"
        RamdiskId: "{{ RamdiskId }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        SubnetId: "{{ SubnetId }}"
        TagSpecifications:
          - ResourceType: "{{ ResourceType }}"
            Tags: "{{ Tags }}"
        UserData: "{{ UserData }}"
    - name: BillingConfiguration
      description: |
        Optional billing configuration for the WorkSpace Instance. Allows customers to specify their preferred billing mode when creating a new instance. Defaults to hourly billing if not specified.
      value:
        BillingMode: "{{ BillingMode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_instance"
    values={[
        { label: 'delete_workspace_instance', value: 'delete_workspace_instance' }
    ]}
>
<TabItem value="delete_workspace_instance">

Deletes the specified WorkSpace Usage of this API will result in deletion of the resource in question.

```sql
DELETE FROM aws.workspaces_instances.workspace_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
