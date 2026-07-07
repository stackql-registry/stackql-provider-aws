--- 
title: instance_types
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_types
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_types"
    values={[
        { label: 'describe_instance_types', value: 'describe_instance_types' }
    ]}
>
<TabItem value="describe_instance_types">

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
    <td><CopyableCode code="AutoRecoverySupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon CloudWatch action based recovery is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="BareMetal" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is a bare metal instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="BurstablePerformanceSupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance type is a burstable performance T instance type. For more information, see Burstable performance instances.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentGeneration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance type is current generation.</td>
</tr>
<tr>
    <td><CopyableCode code="DedicatedHostsSupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Dedicated Hosts are supported on the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the Amazon EBS settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="FpgaInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the FPGA accelerator settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="FreeTierEligible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance type is eligible for the free tier.</td>
</tr>
<tr>
    <td><CopyableCode code="GpuInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the GPU accelerator settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="HibernationSupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether On-Demand hibernation is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="Hypervisor" /></td>
    <td><code>string</code></td>
    <td>The hypervisor for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceAcceleratorInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the Inference accelerator settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceStorageInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the instance storage for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceStorageSupported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether instance storage is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type. For more information, see Instance types in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaAcceleratorInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the media accelerator settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="MemoryInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the memory for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the network settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="NeuronInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the Neuron accelerator settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="NitroEnclavesSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Nitro Enclaves is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="NitroTpmInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the supported NitroTPM versions for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="NitroTpmSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether NitroTPM is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="PhcSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a local Precision Time Protocol (PTP) hardware clock (PHC) is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacementGroupInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the placement group settings for the instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessorInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the processor.</td>
</tr>
<tr>
    <td><CopyableCode code="RebootMigrationSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether reboot migration during a user-initiated reboot is supported for instances that have a scheduled system-reboot event. For more information, see Enable or disable reboot migration in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedBootModes" /></td>
    <td><code>string</code></td>
    <td>The supported boot modes. For more information, see Boot modes in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedInRegion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance type is supported in the current Region.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedRootDeviceTypes" /></td>
    <td><code>string</code></td>
    <td>The supported root device types.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedUsageClasses" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance type is offered for spot, On-Demand, or Capacity Blocks.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedVirtualizationTypes" /></td>
    <td><code>string</code></td>
    <td>The supported virtualization types.</td>
</tr>
<tr>
    <td><CopyableCode code="VCpuInfo" /></td>
    <td><code>string</code></td>
    <td>Describes the vCPU configurations for the instance type.</td>
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
    <td><a href="#describe_instance_types"><CopyableCode code="describe_instance_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludeUnsupportedInRegion"><code>IncludeUnsupportedInRegion</code></a></td>
    <td>Describes the specified instance types. By default, all instance types for the current Region are described. Alternatively, you can filter the results. To include instance types that are not supported in the current Region, set IncludeUnsupportedInRegion to true.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. auto-recovery-supported - Indicates whether Amazon CloudWatch action based recovery is supported (true | false). bare-metal - Indicates whether it is a bare metal instance type (true | false). burstable-performance-supported - Indicates whether the instance type is a burstable performance T instance type (true | false). current-generation - Indicates whether this instance type is the latest generation instance type of an instance family (true | false). dedicated-hosts-supported - Indicates whether the instance type supports Dedicated Hosts. (true | false) ebs-info.attachment-limit-type - The type of Amazon EBS volume attachment limit (shared | dedicated). ebs-info.maximum-ebs-attachments - The maximum number of Amazon EBS volumes that can be attached to the instance type. ebs-info.ebs-optimized-info.baseline-bandwidth-in-mbps - The baseline bandwidth performance for an EBS-optimized instance type, in Mbps. ebs-info.ebs-optimized-info.baseline-iops - The baseline input/output storage operations per second for an EBS-optimized instance type. ebs-info.ebs-optimized-info.baseline-throughput-in-mbps - The baseline throughput performance for an EBS-optimized instance type, in MB/s. ebs-info.ebs-optimized-info.maximum-bandwidth-in-mbps - The maximum bandwidth performance for an EBS-optimized instance type, in Mbps. ebs-info.ebs-optimized-info.maximum-iops - The maximum input/output storage operations per second for an EBS-optimized instance type. ebs-info.ebs-optimized-info.maximum-throughput-in-mbps - The maximum throughput performance for an EBS-optimized instance type, in MB/s. ebs-info.ebs-optimized-support - Indicates whether the instance type is EBS-optimized (supported | unsupported | default). ebs-info.encryption-support - Indicates whether EBS encryption is supported (supported | unsupported). ebs-info.nvme-support - Indicates whether non-volatile memory express (NVMe) is supported for EBS volumes (required | supported | unsupported). free-tier-eligible - A Boolean that indicates whether this instance type can be used under the Amazon Web Services Free Tier (true | false). hibernation-supported - Indicates whether On-Demand hibernation is supported (true | false). hypervisor - The hypervisor (nitro | xen). instance-storage-info.disk.count - The number of local disks. instance-storage-info.disk.size-in-gb - The storage size of each instance storage disk, in GB. instance-storage-info.disk.type - The storage technology for the local instance storage disks (hdd | ssd). instance-storage-info.encryption-support - Indicates whether data is encrypted at rest (required | supported | unsupported). instance-storage-info.nvme-support - Indicates whether non-volatile memory express (NVMe) is supported for instance store (required | supported | unsupported). instance-storage-info.total-size-in-gb - The total amount of storage available from all local instance storage, in GB. instance-storage-supported - Indicates whether the instance type has local instance storage (true | false). instance-type - The instance type (for example c5.2xlarge or c5*). memory-info.size-in-mib - The memory size. network-info.bandwidth-weightings - For instances that support bandwidth weighting to boost performance (default, vpc-1, ebs-1). network-info.efa-info.maximum-efa-interfaces - The maximum number of Elastic Fabric Adapters (EFAs) per instance. network-info.efa-supported - Indicates whether the instance type supports Elastic Fabric Adapter (EFA) (true | false). network-info.ena-support - Indicates whether Elastic Network Adapter (ENA) is supported or required (required | supported | unsupported). network-info.flexible-ena-queues-support - Indicates whether an instance supports flexible ENA queues (supported | unsupported). network-info.encryption-in-transit-supported - Indicates whether the instance type automatically encrypts in-transit traffic between instances (true | false). network-info.ipv4-addresses-per-interface - The maximum number of private IPv4 addresses per network interface. network-info.ipv6-addresses-per-interface - The maximum number of private IPv6 addresses per network interface. network-info.ipv6-supported - Indicates whether the instance type supports IPv6 (true | false). network-info.maximum-network-cards - The maximum number of network cards per instance. network-info.maximum-network-interfaces - The maximum number of network interfaces per instance. network-info.network-performance - The network performance (for example, "25 Gigabit"). nitro-enclaves-support - Indicates whether Nitro Enclaves is supported (supported | unsupported). nitro-tpm-support - Indicates whether NitroTPM is supported (supported | unsupported). nitro-tpm-info.supported-versions - The supported NitroTPM version (2.0). processor-info.supported-architecture - The CPU architecture (arm64 | i386 | x86_64). processor-info.sustained-clock-speed-in-ghz - The CPU clock speed, in GHz. processor-info.supported-features - The supported CPU features (amd-sev-snp). reboot-migration-support - Indicates whether enabling reboot migration is supported (supported | unsupported). supported-boot-mode - The boot mode (legacy-bios | uefi). supported-root-device-type - The root device type (ebs | instance-store). supported-usage-class - The usage class (on-demand | spot | capacity-block). supported-virtualization-type - The virtualization type (hvm | paravirtual). vcpu-info.default-cores - The default number of cores for the instance type. vcpu-info.default-threads-per-core - The default number of threads per core for the instance type. vcpu-info.default-vcpus - The default number of vCPUs for the instance type. vcpu-info.valid-cores - The number of cores that can be configured for the instance type. vcpu-info.valid-threads-per-core - The number of threads per core that can be configured for the instance type. For example, "1" or "1,2".</td>
</tr>
<tr id="parameter-IncludeUnsupportedInRegion">
    <td><CopyableCode code="IncludeUnsupportedInRegion" /></td>
    <td><code>boolean</code></td>
    <td>If true, the response includes instance types that are not supported in the current Region, in addition to the supported types. Default: false.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>array</code></td>
    <td>The instance types.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_types"
    values={[
        { label: 'describe_instance_types', value: 'describe_instance_types' }
    ]}
>
<TabItem value="describe_instance_types">

Describes the specified instance types. By default, all instance types for the current Region are described. Alternatively, you can filter the results. To include instance types that are not supported in the current Region, set IncludeUnsupportedInRegion to true.

```sql
SELECT
AutoRecoverySupported,
BareMetal,
BurstablePerformanceSupported,
CurrentGeneration,
DedicatedHostsSupported,
EbsInfo,
FpgaInfo,
FreeTierEligible,
GpuInfo,
HibernationSupported,
Hypervisor,
InferenceAcceleratorInfo,
InstanceStorageInfo,
InstanceStorageSupported,
InstanceType,
MediaAcceleratorInfo,
MemoryInfo,
NetworkInfo,
NeuronInfo,
NitroEnclavesSupport,
NitroTpmInfo,
NitroTpmSupport,
PhcSupport,
PlacementGroupInfo,
ProcessorInfo,
RebootMigrationSupport,
SupportedBootModes,
SupportedInRegion,
SupportedRootDeviceTypes,
SupportedUsageClasses,
SupportedVirtualizationTypes,
VCpuInfo
FROM aws.ec2.instance_types
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND InstanceType = '{{ InstanceType }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IncludeUnsupportedInRegion = '{{ IncludeUnsupportedInRegion }}'
;
```
</TabItem>
</Tabs>
