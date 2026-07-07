--- 
title: cloud_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_clusters
  - odb
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

Creates, updates, deletes, gets or lists a <code>cloud_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.cloud_vm_clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_vm_cluster"
    values={[
        { label: 'get_cloud_vm_cluster', value: 'get_cloud_vm_cluster' },
        { label: 'list_cloud_vm_clusters', value: 'list_cloud_vm_clusters' }
    ]}
>
<TabItem value="get_cloud_vm_cluster">

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
    <td><CopyableCode code="cloudExadataInfrastructureArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exadata infrastructure that this VM cluster belongs to. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exadata infrastructure that this VM cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudVmClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the Grid Infrastructure (GI) cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>The set of diagnostic collection options enabled for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of database servers for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy. (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iamRoles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iormConfigCache" /></td>
    <td><code>object</code></td>
    <td>The ExadataIormConfig cache details for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether database backups to local Exadata storage is enabled for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the VM cluster is configured with a sparse disk group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the last maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model applied to the VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ociResourceAnchorName" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the VM cluster in OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network for the VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the VM cluster, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DNS record for the SCAN IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The OCID of the SCAN IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The hardware model name of the Exadata infrastructure that's running the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the VM cluster. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="systemVersion" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the image chosen for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cloud_vm_clusters">

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
    <td><CopyableCode code="cloudExadataInfrastructureArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Exadata infrastructure that this VM cluster belongs to. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Exadata infrastructure that this VM cluster belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudVmClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the VM cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the Grid Infrastructure (GI) cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Information about the data collection options enabled for a VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of database servers for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy. (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iamRoles" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Identity and Access Management (IAM) service roles associated with the VM cluster in the summary information.</td>
</tr>
<tr>
    <td><CopyableCode code="iormConfigCache" /></td>
    <td><code>object</code></td>
    <td>The IORM settings of the Exadata DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether database backups to local Exadata storage is enabled for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the VM cluster is configured with a sparse disk group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) of the last maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model applied to the VM cluster. (BRING_YOUR_OWN_LICENSE, LICENSE_INCLUDED)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ociResourceAnchorName" /></td>
    <td><code>string</code></td>
    <td>The name of the OCI resource anchor for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ociUrl" /></td>
    <td><code>string</code></td>
    <td>The HTTPS link to the VM cluster in OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network associated with this VM cluster. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB network for the VM cluster. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of progress made on the current operation on the VM cluster, expressed as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DNS record for the SCAN IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The OCID of the SCAN IP addresses that are associated with the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The hardware model name of the Exadata infrastructure that's running the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the VM cluster. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="systemVersion" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the image chosen for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.</td>
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
    <td><a href="#get_cloud_vm_cluster"><CopyableCode code="get_cloud_vm_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified VM cluster.</td>
</tr>
<tr>
    <td><a href="#list_cloud_vm_clusters"><CopyableCode code="list_cloud_vm_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the VM clusters owned by your Amazon Web Services account or only the ones on the specified Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#create_cloud_vm_cluster"><CopyableCode code="create_cloud_vm_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-cpuCoreCount"><code>cpuCoreCount</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-giVersion"><code>giVersion</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-odbNetworkId"><code>odbNetworkId</code></a></td>
    <td></td>
    <td>Creates a VM cluster on the specified Exadata infrastructure.</td>
</tr>
<tr>
    <td><a href="#delete_cloud_vm_cluster"><CopyableCode code="delete_cloud_vm_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified VM cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_db_node"><CopyableCode code="reboot_db_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-dbNodeId"><code>dbNodeId</code></a></td>
    <td></td>
    <td>Reboots the specified DB node in a VM cluster.</td>
</tr>
<tr>
    <td><a href="#start_db_node"><CopyableCode code="start_db_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-dbNodeId"><code>dbNodeId</code></a></td>
    <td></td>
    <td>Starts the specified DB node in a VM cluster.</td>
</tr>
<tr>
    <td><a href="#stop_db_node"><CopyableCode code="stop_db_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-dbNodeId"><code>dbNodeId</code></a></td>
    <td></td>
    <td>Stops the specified DB node in a VM cluster.</td>
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
    defaultValue="get_cloud_vm_cluster"
    values={[
        { label: 'get_cloud_vm_cluster', value: 'get_cloud_vm_cluster' },
        { label: 'list_cloud_vm_clusters', value: 'list_cloud_vm_clusters' }
    ]}
>
<TabItem value="get_cloud_vm_cluster">

Returns information about the specified VM cluster.

```sql
SELECT
cloudExadataInfrastructureArn,
cloudExadataInfrastructureId,
cloudVmClusterArn,
cloudVmClusterId,
clusterName,
computeModel,
cpuCoreCount,
createdAt,
dataCollectionOptions,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
diskRedundancy,
displayName,
domain,
giVersion,
hostname,
iamRoles,
iormConfigCache,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
listenerPort,
memorySizeInGBs,
nodeCount,
ociResourceAnchorName,
ociUrl,
ocid,
odbNetworkArn,
odbNetworkId,
percentProgress,
scanDnsName,
scanDnsRecordId,
scanIpIds,
shape,
sshPublicKeys,
status,
statusReason,
storageSizeInGBs,
systemVersion,
timeZone,
vipIds
FROM aws.odb.cloud_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cloud_vm_clusters">

Returns information about the VM clusters owned by your Amazon Web Services account or only the ones on the specified Exadata infrastructure.

```sql
SELECT
cloudExadataInfrastructureArn,
cloudExadataInfrastructureId,
cloudVmClusterArn,
cloudVmClusterId,
clusterName,
computeModel,
cpuCoreCount,
createdAt,
dataCollectionOptions,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
diskRedundancy,
displayName,
domain,
giVersion,
hostname,
iamRoles,
iormConfigCache,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
listenerPort,
memorySizeInGBs,
nodeCount,
ociResourceAnchorName,
ociUrl,
ocid,
odbNetworkArn,
odbNetworkId,
percentProgress,
scanDnsName,
scanDnsRecordId,
scanIpIds,
shape,
sshPublicKeys,
status,
statusReason,
storageSizeInGBs,
systemVersion,
timeZone,
vipIds
FROM aws.odb.cloud_vm_clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cloud_vm_cluster"
    values={[
        { label: 'create_cloud_vm_cluster', value: 'create_cloud_vm_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cloud_vm_cluster">

Creates a VM cluster on the specified Exadata infrastructure.

```sql
INSERT INTO aws.odb.cloud_vm_clusters (
cloudExadataInfrastructureId,
cpuCoreCount,
displayName,
giVersion,
hostname,
sshPublicKeys,
odbNetworkId,
clusterName,
dataCollectionOptions,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
tags,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
licenseModel,
memorySizeInGBs,
systemVersion,
timeZone,
clientToken,
scanListenerPortTcp,
region
)
SELECT 
'{{ cloudExadataInfrastructureId }}' /* required */,
{{ cpuCoreCount }} /* required */,
'{{ displayName }}' /* required */,
'{{ giVersion }}' /* required */,
'{{ hostname }}' /* required */,
'{{ sshPublicKeys }}' /* required */,
'{{ odbNetworkId }}' /* required */,
'{{ clusterName }}',
'{{ dataCollectionOptions }}',
{{ dataStorageSizeInTBs }},
{{ dbNodeStorageSizeInGBs }},
'{{ dbServers }}',
'{{ tags }}',
{{ isLocalBackupEnabled }},
{{ isSparseDiskgroupEnabled }},
'{{ licenseModel }}',
{{ memorySizeInGBs }},
'{{ systemVersion }}',
'{{ timeZone }}',
'{{ clientToken }}',
{{ scanListenerPortTcp }},
'{{ region }}'
RETURNING
cloudVmClusterId,
displayName,
status,
statusReason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_vm_clusters resource.
    - name: cloudExadataInfrastructureId
      value: "{{ cloudExadataInfrastructureId }}"
      description: |
        The unique identifier of the Exadata infrastructure for this VM cluster.
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        The number of CPU cores to enable on the VM cluster.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the VM cluster.
    - name: giVersion
      value: "{{ giVersion }}"
      description: |
        A valid software version of Oracle Grid Infrastructure (GI). To get the list of valid values, use the ListGiVersions operation and specify the shape of the Exadata infrastructure. Example: 19.0.0.0
    - name: hostname
      value: "{{ hostname }}"
      description: |
        The host name for the VM cluster. Constraints: Can't be "localhost" or "hostname". Can't contain "-version". The maximum length of the combined hostname and domain is 63 characters. The hostname must be unique within the subnet.
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of one or more key pairs used for SSH access to the VM cluster.
    - name: odbNetworkId
      value: "{{ odbNetworkId }}"
      description: |
        The unique identifier of the ODB network for the VM cluster.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        A name for the Grid Infrastructure cluster. The name isn't case sensitive.
    - name: dataCollectionOptions
      description: |
        The set of preferences for the various diagnostic collection options for the VM cluster.
      value:
        isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
        isHealthMonitoringEnabled: {{ isHealthMonitoringEnabled }}
        isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
    - name: dataStorageSizeInTBs
      value: {{ dataStorageSizeInTBs }}
      description: |
        The size of the data disk group, in terabytes (TBs), to allocate for the VM cluster.
    - name: dbNodeStorageSizeInGBs
      value: {{ dbNodeStorageSizeInGBs }}
      description: |
        The amount of local node storage, in gigabytes (GBs), to allocate for the VM cluster.
    - name: dbServers
      value:
        - "{{ dbServers }}"
      description: |
        The list of database servers for the VM cluster.
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the VM cluster.
    - name: isLocalBackupEnabled
      value: {{ isLocalBackupEnabled }}
      description: |
        Specifies whether to enable database backups to local Exadata storage for the VM cluster.
    - name: isSparseDiskgroupEnabled
      value: {{ isSparseDiskgroupEnabled }}
      description: |
        Specifies whether to create a sparse disk group for the VM cluster.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model to apply to the VM cluster. Default: LICENSE_INCLUDED
      valid_values: ['BRING_YOUR_OWN_LICENSE', 'LICENSE_INCLUDED']
    - name: memorySizeInGBs
      value: {{ memorySizeInGBs }}
      description: |
        The amount of memory, in gigabytes (GBs), to allocate for the VM cluster.
    - name: systemVersion
      value: "{{ systemVersion }}"
      description: |
        The version of the operating system of the image for the VM cluster.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone for the VM cluster. For a list of valid values for time zone, you can check the options in the console. Default: UTC
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, the Amazon Web Services SDK automatically generates a client token and uses it for the request to ensure idempotency. The client token is valid for up to 24 hours after it's first used.
    - name: scanListenerPortTcp
      value: {{ scanListenerPortTcp }}
      description: |
        The port number for TCP connections to the single client access name (SCAN) listener. Valid values: 1024–8999 with the following exceptions: 2484, 6100, 6200, 7060, 7070, 7085, and 7879 Default: 1521
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cloud_vm_cluster"
    values={[
        { label: 'delete_cloud_vm_cluster', value: 'delete_cloud_vm_cluster' }
    ]}
>
<TabItem value="delete_cloud_vm_cluster">

Deletes the specified VM cluster.

```sql
DELETE FROM aws.odb.cloud_vm_clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_db_node"
    values={[
        { label: 'reboot_db_node', value: 'reboot_db_node' },
        { label: 'start_db_node', value: 'start_db_node' },
        { label: 'stop_db_node', value: 'stop_db_node' }
    ]}
>
<TabItem value="reboot_db_node">

Reboots the specified DB node in a VM cluster.

```sql
EXEC aws.odb.cloud_vm_clusters.reboot_db_node 
@region='{{ region }}' --required 
@@json=
'{
"cloudVmClusterId": "{{ cloudVmClusterId }}", 
"dbNodeId": "{{ dbNodeId }}"
}'
;
```
</TabItem>
<TabItem value="start_db_node">

Starts the specified DB node in a VM cluster.

```sql
EXEC aws.odb.cloud_vm_clusters.start_db_node 
@region='{{ region }}' --required 
@@json=
'{
"cloudVmClusterId": "{{ cloudVmClusterId }}", 
"dbNodeId": "{{ dbNodeId }}"
}'
;
```
</TabItem>
<TabItem value="stop_db_node">

Stops the specified DB node in a VM cluster.

```sql
EXEC aws.odb.cloud_vm_clusters.stop_db_node 
@region='{{ region }}' --required 
@@json=
'{
"cloudVmClusterId": "{{ cloudVmClusterId }}", 
"dbNodeId": "{{ dbNodeId }}"
}'
;
```
</TabItem>
</Tabs>
