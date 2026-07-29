--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

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
    <td><CopyableCode code="job_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about a specific job, including shipping information, job status, and other important metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_job_metadata" /></td>
    <td><code>array</code></td>
    <td>Information about a specific job part (in the case of an export job), including shipping information, job status, and other important metadata.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description of this specific job, for example Important Photos 2016-08-11. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_master" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates that this job is a main job. A main job represents a successful request to create an export job. Main jobs aren't associated with any Snowballs. Instead, each main job will have at least one job part, and each job part is associated with a Snowball. It might take some time before the job parts associated with a particular main job are listed, because they are created after the main job is created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The automatically generated ID for a job, for example JID123e4567-e89b-12d3-a456-426655440000. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_state" /></td>
    <td><code>string</code></td>
    <td>The current state of this job. (New, PreparingAppliance, PreparingShipment, InTransitToCustomer, WithCustomer, InTransitToAWS, WithAWSSortingFacility, WithAWS, InProgress, Complete, Cancelled, Listing, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The type of job. (IMPORT, EXPORT, LOCAL_USE)</td>
</tr>
<tr>
    <td><CopyableCode code="snowball_type" /></td>
    <td><code>string</code></td>
    <td>The type of device used with this job. (STANDARD, EDGE, EDGE_C, EDGE_CG, EDGE_S, SNC1_HDD, SNC1_SSD, V3_5C, V3_5S, RACK_5U_C)</td>
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
    <td><a href="#describe_job"><CopyableCode code="describe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific job including shipping information, job status, and other important metadata.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of JobListEntry objects of the specified length. Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster. Only the Snowball; Edge device type is supported when ordering clustered jobs. The device capacity is optional. Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see Amazon Web Services Regional Services. Snow Family devices and their capacities. Device type: SNC1_SSD Capacity: T14 Description: Snowcone Device type: SNC1_HDD Capacity: T8 Description: Snowcone Device type: EDGE_S Capacity: T98 Description: Snowball Edge Storage Optimized for data transfer only Device type: EDGE_CG Capacity: T42 Description: Snowball Edge Compute Optimized with GPU Device type: EDGE_C Capacity: T42 Description: Snowball Edge Compute Optimized without GPU Device type: EDGE Capacity: T100 Description: Snowball Edge Storage Optimized with EC2 Compute This device is replaced with T98. Device type: STANDARD Capacity: T50 Description: Original Snowball device This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region Device type: STANDARD Capacity: T80 Description: Original Snowball device This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. Snow Family device type: RACK_5U_C Capacity: T13 Description: Snowblade. Device type: V3_5S Capacity: T240 Description: Snowball Edge Storage Optimized 210TB</td>
</tr>
<tr>
    <td><a href="#update_job_shipment_state"><CopyableCode code="update_job_shipment_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a>, <a href="#parameter-ShipmentState"><code>ShipmentState</code></a></td>
    <td></td>
    <td>Updates the state when a shipment state changes to a different state.</td>
</tr>
<tr>
    <td><a href="#update_job"><CopyableCode code="update_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>While a job's JobState value is New, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Cancels the specified job. You can only cancel a job before its JobState value changes to PreparingAppliance. Requesting the ListJobs or DescribeJob action returns a job's JobState as part of the response element data returned.</td>
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
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

Returns information about a specific job including shipping information, job status, and other important metadata.

```sql
SELECT
job_metadata,
sub_job_metadata
FROM aws.snowball.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Returns an array of JobListEntry objects of the specified length. Each JobListEntry object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.

```sql
SELECT
creation_date,
description,
is_master,
job_id,
job_state,
job_type,
snowball_type
FROM aws.snowball.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the clusterId value; the other job attributes are inherited from the cluster. Only the Snowball; Edge device type is supported when ordering clustered jobs. The device capacity is optional. Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see Amazon Web Services Regional Services. Snow Family devices and their capacities. Device type: SNC1_SSD Capacity: T14 Description: Snowcone Device type: SNC1_HDD Capacity: T8 Description: Snowcone Device type: EDGE_S Capacity: T98 Description: Snowball Edge Storage Optimized for data transfer only Device type: EDGE_CG Capacity: T42 Description: Snowball Edge Compute Optimized with GPU Device type: EDGE_C Capacity: T42 Description: Snowball Edge Compute Optimized without GPU Device type: EDGE Capacity: T100 Description: Snowball Edge Storage Optimized with EC2 Compute This device is replaced with T98. Device type: STANDARD Capacity: T50 Description: Original Snowball device This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region Device type: STANDARD Capacity: T80 Description: Original Snowball device This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. Snow Family device type: RACK_5U_C Capacity: T13 Description: Snowblade. Device type: V3_5S Capacity: T240 Description: Snowball Edge Storage Optimized 210TB

```sql
INSERT INTO aws.snowball.jobs (
JobType,
Resources,
OnDeviceServiceConfiguration,
Description,
AddressId,
KmsKeyARN,
RoleARN,
SnowballCapacityPreference,
ShippingOption,
Notification,
ClusterId,
SnowballType,
ForwardingAddressId,
TaxDocuments,
DeviceConfiguration,
RemoteManagement,
LongTermPricingId,
ImpactLevel,
PickupDetails,
region
)
SELECT 
'{{ JobType }}',
'{{ Resources }}',
'{{ OnDeviceServiceConfiguration }}',
'{{ Description }}',
'{{ AddressId }}',
'{{ KmsKeyARN }}',
'{{ RoleARN }}',
'{{ SnowballCapacityPreference }}',
'{{ ShippingOption }}',
'{{ Notification }}',
'{{ ClusterId }}',
'{{ SnowballType }}',
'{{ ForwardingAddressId }}',
'{{ TaxDocuments }}',
'{{ DeviceConfiguration }}',
'{{ RemoteManagement }}',
'{{ LongTermPricingId }}',
'{{ ImpactLevel }}',
'{{ PickupDetails }}',
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: JobType
      value: "{{ JobType }}"
      description: |
        Defines the type of job that you're creating.
      valid_values: ['IMPORT', 'EXPORT', 'LOCAL_USE']
    - name: Resources
      description: |
        Defines the Amazon S3 buckets associated with this job. With IMPORT jobs, you specify the bucket or buckets that your transferred data will be imported into. With EXPORT jobs, you specify the bucket or buckets that your transferred data will be exported from. Optionally, you can also specify a KeyRange value. If you choose to export a range, you define the length of the range by providing either an inclusive BeginMarker value, an inclusive EndMarker value, or both. Ranges are UTF-8 binary sorted.
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
        Specifies the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System) and the Amazon Web Services Storage Gateway service Tape Gateway type.
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
        Defines an optional description of this specific job, for example Important Photos 2016-08-11.
    - name: AddressId
      value: "{{ AddressId }}"
      description: |
        The ID for the address that you want the Snow device shipped to.
    - name: KmsKeyARN
      value: "{{ KmsKeyARN }}"
      description: |
        The KmsKeyARN that you want to associate with this job. KmsKeyARNs are created using the CreateKey Key Management Service (KMS) API action.
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: |
        The RoleARN that you want to associate with this job. RoleArns are created using the CreateRole Identity and Access Management (IAM) API action.
    - name: SnowballCapacityPreference
      value: "{{ SnowballCapacityPreference }}"
      description: |
        If your job is being created in one of the US regions, you have the option of specifying what size Snow device you'd like for this job. In all other regions, Snowballs come with 80 TB in storage capacity. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      valid_values: ['T50', 'T80', 'T100', 'T42', 'T98', 'T8', 'T14', 'T32', 'NoPreference', 'T240', 'T13']
    - name: ShippingOption
      value: "{{ ShippingOption }}"
      description: |
        The shipping speed for this job. This speed doesn't dictate how soon you'll get the Snow device, rather it represents how quickly the Snow device moves to its destination while in transit. Regional shipping speeds are as follows: In Australia, you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In the European Union (EU), you have access to express shipping. Typically, Snow devices shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way. In India, Snow devices are delivered in one to seven days. In the US, you have access to one-day shipping and two-day shipping.
      valid_values: ['SECOND_DAY', 'NEXT_DAY', 'EXPRESS', 'STANDARD']
    - name: Notification
      description: |
        Defines the Amazon Simple Notification Service (Amazon SNS) notification settings for this job.
      value:
        SnsTopicARN: "{{ SnsTopicARN }}"
        JobStatesToNotify:
          - "{{ JobStatesToNotify }}"
        NotifyAll: {{ NotifyAll }}
        DevicePickupSnsTopicARN: "{{ DevicePickupSnsTopicARN }}"
    - name: ClusterId
      value: "{{ ClusterId }}"
      description: |
        The ID of a cluster. If you're creating a job for a node in a cluster, you need to provide only this clusterId value. The other job attributes are inherited from the cluster.
    - name: SnowballType
      value: "{{ SnowballType }}"
      description: |
        The type of Snow Family devices to use for this job. For cluster jobs, Amazon Web Services Snow Family currently supports only the EDGE device type. The type of Amazon Web Services Snow device to use for this job. Currently, the only supported device type for cluster jobs is EDGE. For more information, see Snowball Edge Device Options in the Snowball Edge Developer Guide. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      valid_values: ['STANDARD', 'EDGE', 'EDGE_C', 'EDGE_CG', 'EDGE_S', 'SNC1_HDD', 'SNC1_SSD', 'V3_5C', 'V3_5S', 'RACK_5U_C']
    - name: ForwardingAddressId
      value: "{{ ForwardingAddressId }}"
      description: |
        The forwarding address ID for a job. This field is not supported in most Regions.
    - name: TaxDocuments
      description: |
        The tax documents required in your Amazon Web Services Region.
      value:
        IND:
          GSTIN: "{{ GSTIN }}"
    - name: DeviceConfiguration
      description: |
        Defines the device configuration for an Snowball Edge job. For more information, see "https://docs.aws.amazon.com/snowball/latest/snowcone-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide or "https://docs.aws.amazon.com/snowball/latest/developer-guide/snow-device-types.html" (Snow Family Devices and Capacity) in the Snowcone User Guide.
      value:
        SnowconeDeviceConfiguration:
          WirelessConnection:
            IsWifiEnabled: {{ IsWifiEnabled }}
    - name: RemoteManagement
      value: "{{ RemoteManagement }}"
      description: |
        Allows you to securely operate and manage Snowcone devices remotely from outside of your internal network. When set to INSTALLED_AUTOSTART, remote management will automatically be available when the device arrives at your location. Otherwise, you need to use the Snowball Edge client to manage the device. When set to NOT_INSTALLED, remote management will not be available on the device.
      valid_values: ['INSTALLED_ONLY', 'INSTALLED_AUTOSTART', 'NOT_INSTALLED']
    - name: LongTermPricingId
      value: "{{ LongTermPricingId }}"
      description: |
        The ID of the long-term pricing type for the device.
    - name: ImpactLevel
      value: "{{ ImpactLevel }}"
      description: |
        The highest impact level of data that will be stored or processed on the device, provided at job creation.
      valid_values: ['IL2', 'IL4', 'IL5', 'IL6', 'IL99']
    - name: PickupDetails
      description: |
        Information identifying the person picking up the device.
      value:
        Name: "{{ Name }}"
        PhoneNumber: "{{ PhoneNumber }}"
        Email: "{{ Email }}"
        IdentificationNumber: "{{ IdentificationNumber }}"
        IdentificationExpirationDate: "{{ IdentificationExpirationDate }}"
        IdentificationIssuingOrg: "{{ IdentificationIssuingOrg }}"
        DevicePickupId: "{{ DevicePickupId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job_shipment_state"
    values={[
        { label: 'update_job_shipment_state', value: 'update_job_shipment_state' },
        { label: 'update_job', value: 'update_job' }
    ]}
>
<TabItem value="update_job_shipment_state">

Updates the state when a shipment state changes to a different state.

```sql
UPDATE aws.snowball.jobs
SET 
JobId = '{{ JobId }}',
ShipmentState = '{{ ShipmentState }}'
WHERE 
region = '{{ region }}' --required
AND JobId = '{{ JobId }}' --required
AND ShipmentState = '{{ ShipmentState }}' --required;
```
</TabItem>
<TabItem value="update_job">

While a job's JobState value is New, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.

```sql
UPDATE aws.snowball.jobs
SET 
JobId = '{{ JobId }}',
RoleARN = '{{ RoleARN }}',
Notification = '{{ Notification }}',
Resources = '{{ Resources }}',
OnDeviceServiceConfiguration = '{{ OnDeviceServiceConfiguration }}',
AddressId = '{{ AddressId }}',
ShippingOption = '{{ ShippingOption }}',
Description = '{{ Description }}',
SnowballCapacityPreference = '{{ SnowballCapacityPreference }}',
ForwardingAddressId = '{{ ForwardingAddressId }}',
PickupDetails = '{{ PickupDetails }}'
WHERE 
region = '{{ region }}' --required
AND JobId = '{{ JobId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' }
    ]}
>
<TabItem value="cancel_job">

Cancels the specified job. You can only cancel a job before its JobState value changes to PreparingAppliance. Requesting the ListJobs or DescribeJob action returns a job's JobState as part of the response element data returned.

```sql
EXEC aws.snowball.jobs.cancel_job 
@region='{{ region }}' --required 
@@json=
'{
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
</Tabs>
