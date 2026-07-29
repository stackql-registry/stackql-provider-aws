--- 
title: resource_data_syncs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_data_syncs
  - ssm
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

Creates, updates, deletes, gets or lists a <code>resource_data_syncs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_data_syncs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.resource_data_syncs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_data_sync"
    values={[
        { label: 'list_resource_data_sync', value: 'list_resource_data_sync' }
    ]}
>
<TabItem value="list_resource_data_sync">

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
    <td><CopyableCode code="last_status" /></td>
    <td><code>string</code></td>
    <td>The status reported by the last sync. (Successful, Failed, InProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_sync_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the sync operations returned a status of SUCCESSFUL (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="last_sync_status_message" /></td>
    <td><code>string</code></td>
    <td>The status message details reported by the last sync.</td>
</tr>
<tr>
    <td><CopyableCode code="last_sync_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the configuration attempted to sync (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="s3_destination" /></td>
    <td><code>object</code></td>
    <td>Configuration information for the target S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the configuration was created (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="sync_last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource data sync was changed.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource data sync.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_source" /></td>
    <td><code>object</code></td>
    <td>Information about the source where the data was synchronized.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource data sync. If SyncType is SyncToDestination, then the resource data sync synchronizes data to an S3 bucket. If the SyncType is SyncFromSource then the resource data sync synchronizes data from Organizations or from multiple Amazon Web Services Regions.</td>
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
    <td><a href="#list_resource_data_sync"><CopyableCode code="list_resource_data_sync" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call.</td>
</tr>
<tr>
    <td><a href="#create_resource_data_sync"><CopyableCode code="create_resource_data_sync" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SyncName"><code>SyncName</code></a></td>
    <td></td>
    <td>A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: SyncToDestination and SyncFromSource. You can configure Systems Manager Inventory to use the SyncToDestination type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Creating a resource data sync for Inventory in the Amazon Web Services Systems Manager User Guide. You can configure Systems Manager Explorer to use the SyncFromSource type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or EntireOrganization by using Organizations. For more information, see Setting up Systems Manager Explorer to display data from multiple accounts and Regions in the Amazon Web Services Systems Manager User Guide. A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the ListResourceDataSync. By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.</td>
</tr>
<tr>
    <td><a href="#update_resource_data_sync"><CopyableCode code="update_resource_data_sync" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SyncName"><code>SyncName</code></a>, <a href="#parameter-SyncType"><code>SyncType</code></a>, <a href="#parameter-SyncSource"><code>SyncSource</code></a></td>
    <td></td>
    <td>Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one. This API operation only supports a resource data sync that was created with a SyncFromSource SyncType.</td>
</tr>
<tr>
    <td><a href="#delete_resource_data_sync"><CopyableCode code="delete_resource_data_sync" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.</td>
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
    defaultValue="list_resource_data_sync"
    values={[
        { label: 'list_resource_data_sync', value: 'list_resource_data_sync' }
    ]}
>
<TabItem value="list_resource_data_sync">

Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call.

```sql
SELECT
last_status,
last_successful_sync_time,
last_sync_status_message,
last_sync_time,
s3_destination,
sync_created_time,
sync_last_modified_time,
sync_name,
sync_source,
sync_type
FROM aws.ssm.resource_data_syncs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_data_sync"
    values={[
        { label: 'create_resource_data_sync', value: 'create_resource_data_sync' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_data_sync">

A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: SyncToDestination and SyncFromSource. You can configure Systems Manager Inventory to use the SyncToDestination type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Creating a resource data sync for Inventory in the Amazon Web Services Systems Manager User Guide. You can configure Systems Manager Explorer to use the SyncFromSource type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or EntireOrganization by using Organizations. For more information, see Setting up Systems Manager Explorer to display data from multiple accounts and Regions in the Amazon Web Services Systems Manager User Guide. A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the ListResourceDataSync. By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.

```sql
INSERT INTO aws.ssm.resource_data_syncs (
SyncName,
S3Destination,
SyncType,
SyncSource,
region
)
SELECT 
'{{ SyncName }}' /* required */,
'{{ S3Destination }}',
'{{ SyncType }}',
'{{ SyncSource }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_data_syncs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_data_syncs resource.
    - name: SyncName
      value: "{{ SyncName }}"
      description: |
        A name for the configuration.
    - name: S3Destination
      description: |
        Amazon S3 configuration details for the sync. This parameter is required if the SyncType value is SyncToDestination.
      value:
        BucketName: "{{ BucketName }}"
        Prefix: "{{ Prefix }}"
        SyncFormat: "{{ SyncFormat }}"
        Region: "{{ Region }}"
        AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
        DestinationDataSharing:
          DestinationDataSharingType: "{{ DestinationDataSharingType }}"
    - name: SyncType
      value: "{{ SyncType }}"
      description: |
        Specify SyncToDestination to create a resource data sync that synchronizes data to an S3 bucket for Inventory. If you specify SyncToDestination, you must provide a value for S3Destination. Specify SyncFromSource to synchronize data from a single account and multiple Regions, or multiple Amazon Web Services accounts and Amazon Web Services Regions, as listed in Organizations for Explorer. If you specify SyncFromSource, you must provide a value for SyncSource. The default value is SyncToDestination.
    - name: SyncSource
      description: |
        Specify information about the data sources to synchronize. This parameter is required if the SyncType value is SyncFromSource.
      value:
        SourceType: "{{ SourceType }}"
        AwsOrganizationsSource:
          OrganizationSourceType: "{{ OrganizationSourceType }}"
          OrganizationalUnits:
            - OrganizationalUnitId: "{{ OrganizationalUnitId }}"
        SourceRegions:
          - "{{ SourceRegions }}"
        IncludeFutureRegions: {{ IncludeFutureRegions }}
        EnableAllOpsDataSources: {{ EnableAllOpsDataSources }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_data_sync"
    values={[
        { label: 'update_resource_data_sync', value: 'update_resource_data_sync' }
    ]}
>
<TabItem value="update_resource_data_sync">

Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one. This API operation only supports a resource data sync that was created with a SyncFromSource SyncType.

```sql
UPDATE aws.ssm.resource_data_syncs
SET 
SyncName = '{{ SyncName }}',
SyncType = '{{ SyncType }}',
SyncSource = '{{ SyncSource }}'
WHERE 
region = '{{ region }}' --required
AND SyncName = '{{ SyncName }}' --required
AND SyncType = '{{ SyncType }}' --required
AND SyncSource = '{{ SyncSource }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_data_sync"
    values={[
        { label: 'delete_resource_data_sync', value: 'delete_resource_data_sync' }
    ]}
>
<TabItem value="delete_resource_data_sync">

Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.

```sql
DELETE FROM aws.ssm.resource_data_syncs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
