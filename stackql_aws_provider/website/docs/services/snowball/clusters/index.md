--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - snowball
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

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
    <td><CopyableCode code="address_id" /></td>
    <td><code>string</code></td>
    <td>The automatically generated ID for a specific address. (pattern: &lt;code&gt;ADID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The automatically generated ID for a cluster. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_state" /></td>
    <td><code>string</code></td>
    <td>The current status of the cluster. (AwaitingQuorum, Pending, InUse, Complete, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description of the cluster. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="forwarding_address_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the address that you want a cluster shipped to, after it will be shipped to its primary address. This field is not supported in most regions. (pattern: &lt;code&gt;ADID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The type of job for this cluster. Currently, the only job type supported for clusters is LOCAL_USE. (IMPORT, EXPORT, LOCAL_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The KmsKeyARN Amazon Resource Name (ARN) associated with this cluster. This ARN was created using the CreateKey API action in Key Management Service (KMS. (pattern: &lt;code&gt;arn:aws.*:kms:.*:&#91;0-9&#93;&#123;12&#125;:key/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification" /></td>
    <td><code>object</code></td>
    <td>The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="on_device_service_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents metadata and configuration settings for services on an Amazon Web Services Snow Family device.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>The arrays of JobResource objects that can include updated S3Resource objects or LambdaResource objects.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The role ARN associated with this cluster. This ARN was created using the CreateRole API action in Identity and Access Management (IAM). (pattern: &lt;code&gt;arn:aws.*:iam::&#91;0-9&#93;&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shipping_option" /></td>
    <td><code>string</code></td>
    <td>The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows: In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day. In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way. In India, Snow devices are delivered in one to seven days. In the US, you have access to one-day shipping and two-day shipping. (SECOND_DAY, NEXT_DAY, EXPRESS, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="snowball_type" /></td>
    <td><code>string</code></td>
    <td>The type of Snowball Edge device to use for this cluster. For cluster jobs, Amazon Web Services Snow Family currently supports only the EDGE device type. (STANDARD, EDGE, EDGE_C, EDGE_CG, EDGE_S, SNC1_HDD, SNC1_SSD, V3_5C, V3_5S, RACK_5U_C)</td>
</tr>
<tr>
    <td><CopyableCode code="tax_documents" /></td>
    <td><code>object</code></td>
    <td>The tax documents required in your Amazon Web Services Region.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

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
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string</code></td>
    <td>The 39-character ID for the cluster that you want to list, for example CID123e4567-e89b-12d3-a456-426655440000. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_state" /></td>
    <td><code>string</code></td>
    <td>The current state of this cluster. For information about the state of a specific node, see JobListEntry$JobState. (AwaitingQuorum, Pending, InUse, Complete, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date for this cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Defines an optional description of the cluster, for example Environmental Data Cluster-01. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific cluster including shipping information, cluster status, and other important metadata.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobType"><code>JobType</code></a>, <a href="#parameter-AddressId"><code>AddressId</code></a>, <a href="#parameter-SnowballType"><code>SnowballType</code></a>, <a href="#parameter-ShippingOption"><code>ShippingOption</code></a></td>
    <td></td>
    <td>Creates an empty cluster. Each cluster supports five nodes. You use the CreateJob action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.</td>
</tr>
<tr>
    <td><a href="#cancel_cluster"><CopyableCode code="cancel_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status. You'll have at least an hour after creating a cluster job to cancel it.</td>
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
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Returns information about a specific cluster including shipping information, cluster status, and other important metadata.

```sql
SELECT
address_id,
cluster_id,
cluster_state,
creation_date,
description,
forwarding_address_id,
job_type,
kms_key_arn,
notification,
on_device_service_configuration,
resources,
role_arn,
shipping_option,
snowball_type,
tax_documents
FROM aws.snowball.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.

```sql
SELECT
cluster_id,
cluster_state,
creation_date,
description
FROM aws.snowball.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates an empty cluster. Each cluster supports five nodes. You use the CreateJob action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.

```sql
INSERT INTO aws.snowball.clusters (
JobType,
Resources,
OnDeviceServiceConfiguration,
Description,
AddressId,
KmsKeyARN,
RoleARN,
SnowballType,
ShippingOption,
Notification,
ForwardingAddressId,
TaxDocuments,
RemoteManagement,
InitialClusterSize,
ForceCreateJobs,
LongTermPricingIds,
SnowballCapacityPreference,
region
)
SELECT 
'{{ JobType }}' /* required */,
'{{ Resources }}',
'{{ OnDeviceServiceConfiguration }}',
'{{ Description }}',
'{{ AddressId }}' /* required */,
'{{ KmsKeyARN }}',
'{{ RoleARN }}',
'{{ SnowballType }}' /* required */,
'{{ ShippingOption }}' /* required */,
'{{ Notification }}',
'{{ ForwardingAddressId }}',
'{{ TaxDocuments }}',
'{{ RemoteManagement }}',
{{ InitialClusterSize }},
{{ ForceCreateJobs }},
'{{ LongTermPricingIds }}',
'{{ SnowballCapacityPreference }}',
'{{ region }}'
RETURNING
cluster_id,
job_list_entries
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: JobType
      value: "{{ JobType }}"
      description: |
        The type of job for this cluster. Currently, the only job type supported for clusters is LOCAL_USE. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      valid_values: ['IMPORT', 'EXPORT', 'LOCAL_USE']
    - name: Resources
      description: |
        The resources associated with the cluster job. These resources include Amazon S3 buckets and optional Lambda functions written in the Python language.
      value:
        S3Resources:
          - BucketArn: "{{ BucketArn }}"
            KeyRange:
              BeginMarker: "{{ BeginMarker }}"
              EndMarker: "{{ EndMarker }}"
            TargetOnDeviceServices: "{{ TargetOnDeviceServices }}"
        LambdaResources:
          - LambdaArn: "{{ LambdaArn }}"
            EventTriggers: "{{ EventTriggers }}"
        Ec2AmiResources:
          - AmiId: "{{ AmiId }}"
            SnowballAmiId: "{{ SnowballAmiId }}"
    - name: OnDeviceServiceConfiguration
      description: |
        Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family device clusters support Amazon S3 and NFS (Network File System).
      value:
        NFSOnDeviceService:
          StorageLimit: {{ StorageLimit }}
          StorageUnit: "{{ StorageUnit }}"
        TGWOnDeviceService:
          StorageLimit: {{ StorageLimit }}
          StorageUnit: "{{ StorageUnit }}"
        EKSOnDeviceService:
          KubernetesVersion: "{{ KubernetesVersion }}"
          EKSAnywhereVersion: "{{ EKSAnywhereVersion }}"
        S3OnDeviceService:
          StorageLimit: {{ StorageLimit }}
          StorageUnit: "{{ StorageUnit }}"
          ServiceSize: {{ ServiceSize }}
          FaultTolerance: {{ FaultTolerance }}
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description of this specific cluster, for example Environmental Data Cluster-01.
    - name: AddressId
      value: "{{ AddressId }}"
      description: |
        The ID for the address that you want the cluster shipped to.
    - name: KmsKeyARN
      value: "{{ KmsKeyARN }}"
      description: |
        The KmsKeyARN value that you want to associate with this cluster. KmsKeyARN values are created by using the CreateKey API action in Key Management Service (KMS).
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: |
        The RoleARN that you want to associate with this cluster. RoleArn values are created by using the CreateRole API action in Identity and Access Management (IAM).
    - name: SnowballType
      value: "{{ SnowballType }}"
      description: |
        The type of Snow Family devices to use for this cluster. For cluster jobs, Amazon Web Services Snow Family currently supports only the EDGE device type. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      valid_values: ['STANDARD', 'EDGE', 'EDGE_C', 'EDGE_CG', 'EDGE_S', 'SNC1_HDD', 'SNC1_SSD', 'V3_5C', 'V3_5S', 'RACK_5U_C']
    - name: ShippingOption
      value: "{{ ShippingOption }}"
      description: |
        The shipping speed for each node in this cluster. This speed doesn't dictate how soon you'll get each Snowball Edge device, rather it represents how quickly each device moves to its destination while in transit. Regional shipping speeds are as follows: In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way. In India, Snow devices are delivered in one to seven days. In the United States of America (US), you have access to one-day shipping and two-day shipping. In Australia, you have access to express shipping. Typically, devices shipped express are delivered in about a day. In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way. In India, Snow devices are delivered in one to seven days. In the US, you have access to one-day shipping and two-day shipping.
      valid_values: ['SECOND_DAY', 'NEXT_DAY', 'EXPRESS', 'STANDARD']
    - name: Notification
      description: |
        The Amazon Simple Notification Service (Amazon SNS) notification settings for this cluster.
      value:
        SnsTopicARN: "{{ SnsTopicARN }}"
        JobStatesToNotify:
          - "{{ JobStatesToNotify }}"
        NotifyAll: {{ NotifyAll }}
        DevicePickupSnsTopicARN: "{{ DevicePickupSnsTopicARN }}"
    - name: ForwardingAddressId
      value: "{{ ForwardingAddressId }}"
      description: |
        The forwarding address ID for a cluster. This field is not supported in most regions.
    - name: TaxDocuments
      description: |
        The tax documents required in your Amazon Web Services Region.
      value:
        IND:
          GSTIN: "{{ GSTIN }}"
    - name: RemoteManagement
      value: "{{ RemoteManagement }}"
      description: |
        Allows you to securely operate and manage Snow devices in a cluster remotely from outside of your internal network. When set to INSTALLED_AUTOSTART, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Client to manage the device.
      valid_values: ['INSTALLED_ONLY', 'INSTALLED_AUTOSTART', 'NOT_INSTALLED']
    - name: InitialClusterSize
      value: {{ InitialClusterSize }}
      description: |
        If provided, each job will be automatically created and associated with the new cluster. If not provided, will be treated as 0.
    - name: ForceCreateJobs
      value: {{ ForceCreateJobs }}
      description: |
        Force to create cluster when user attempts to overprovision or underprovision a cluster. A cluster is overprovisioned or underprovisioned if the initial size of the cluster is more (overprovisioned) or less (underprovisioned) than what needed to meet capacity requirement specified with OnDeviceServiceConfiguration.
    - name: LongTermPricingIds
      value:
        - "{{ LongTermPricingIds }}"
      description: |
        Lists long-term pricing id that will be used to associate with jobs automatically created for the new cluster.
    - name: SnowballCapacityPreference
      value: "{{ SnowballCapacityPreference }}"
      description: |
        If your job is being created in one of the US regions, you have the option of specifying what size Snow device you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      valid_values: ['T50', 'T80', 'T100', 'T42', 'T98', 'T8', 'T14', 'T32', 'NoPreference', 'T240', 'T13']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster"
    values={[
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster">

While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.

```sql
UPDATE aws.snowball.clusters
SET 
ClusterId = '{{ ClusterId }}',
RoleARN = '{{ RoleARN }}',
Description = '{{ Description }}',
Resources = '{{ Resources }}',
OnDeviceServiceConfiguration = '{{ OnDeviceServiceConfiguration }}',
AddressId = '{{ AddressId }}',
ShippingOption = '{{ ShippingOption }}',
Notification = '{{ Notification }}',
ForwardingAddressId = '{{ ForwardingAddressId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_cluster"
    values={[
        { label: 'cancel_cluster', value: 'cancel_cluster' }
    ]}
>
<TabItem value="cancel_cluster">

Cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status. You'll have at least an hour after creating a cluster job to cancel it.

```sql
EXEC aws.snowball.clusters.cancel_cluster 
@region='{{ region }}' --required 
@@json=
'{
"ClusterId": "{{ ClusterId }}"
}'
;
```
</TabItem>
</Tabs>
