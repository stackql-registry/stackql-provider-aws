--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - sagemaker_featurestore_runtime
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_featurestore_runtime.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_record"
    values={[
        { label: 'get_record', value: 'get_record' },
        { label: 'batch_get_record', value: 'batch_get_record' }
    ]}
>
<TabItem value="get_record">

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
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string</code></td>
    <td>The ExpiresAt ISO string of the requested record.</td>
</tr>
<tr>
    <td><CopyableCode code="record" /></td>
    <td><code>array</code></td>
    <td>The record you requested. A list of FeatureValues.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_record">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors that have occurred when retrieving a batch of Records.</td>
</tr>
<tr>
    <td><CopyableCode code="records" /></td>
    <td><code>array</code></td>
    <td>A list of Records you requested to be retrieved in batch.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_identifiers" /></td>
    <td><code>array</code></td>
    <td>A unprocessed list of FeatureGroup names, with their corresponding RecordIdentifier value, and Feature name.</td>
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
    <td><a href="#get_record"><CopyableCode code="get_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-feature_group_name"><code>feature_group_name</code></a>, <a href="#parameter-RecordIdentifierValueAsString"><code>RecordIdentifierValueAsString</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FeatureName"><code>FeatureName</code></a>, <a href="#parameter-ExpirationTimeResponse"><code>ExpirationTimeResponse</code></a></td>
    <td>Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned.</td>
</tr>
<tr>
    <td><a href="#batch_get_record"><CopyableCode code="batch_get_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a batch of Records from a FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#put_record"><CopyableCode code="put_record" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-feature_group_name"><code>feature_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The PutRecord API is used to ingest a list of Records into your feature group. If a new record’s EventTime is greater, the new record is written to both the OnlineStore and OfflineStore. Otherwise, the record is a historic record and it is written only to the OfflineStore. You can specify the ingestion to be applied to the OnlineStore, OfflineStore, or both by using the TargetStores request parameter. You can set the ingested record to expire at a given time to live (TTL) duration after the record’s event time, ExpiresAt = EventTime + TtlDuration, by specifying the TtlDuration parameter. A record level TtlDuration is set when specifying the TtlDuration parameter using the PutRecord API call. If the input TtlDuration is null or unspecified, TtlDuration is set to the default feature group level TtlDuration. A record level TtlDuration supersedes the group level TtlDuration.</td>
</tr>
<tr>
    <td><a href="#delete_record"><CopyableCode code="delete_record" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-feature_group_name"><code>feature_group_name</code></a>, <a href="#parameter-RecordIdentifierValueAsString"><code>RecordIdentifierValueAsString</code></a>, <a href="#parameter-EventTime"><code>EventTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetStores"><code>TargetStores</code></a>, <a href="#parameter-DeletionMode"><code>DeletionMode</code></a></td>
    <td>Deletes a Record from a FeatureGroup in the OnlineStore. Feature Store supports both SoftDelete and HardDelete. For SoftDelete (default), feature columns are set to null and the record is no longer retrievable by GetRecord or BatchGetRecord. For HardDelete, the complete Record is removed from the OnlineStore. In both cases, Feature Store appends the deleted record marker to the OfflineStore. The deleted record marker is a record with the same RecordIdentifer as the original, but with is_deleted value set to True, EventTime set to the delete input EventTime, and other feature values set to null. Note that the EventTime specified in DeleteRecord should be set later than the EventTime of the existing record in the OnlineStore for that RecordIdentifer. If it is not, the deletion does not occur: For SoftDelete, the existing (not deleted) record remains in the OnlineStore, though the delete record marker is still written to the OfflineStore. HardDelete returns EventTime: 400 ValidationException to indicate that the delete operation failed. No delete record marker is written to the OfflineStore. When a record is deleted from the OnlineStore, the deleted record marker is appended to the OfflineStore. If you have the Iceberg table format enabled for your OfflineStore, you can remove all history of a record from the OfflineStore using Amazon Athena or Apache Spark. For information on how to hard delete a record from the OfflineStore with the Iceberg table format enabled, see Delete records from the offline store.</td>
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
<tr id="parameter-EventTime">
    <td><CopyableCode code="EventTime" /></td>
    <td><code>string</code></td>
    <td>Timestamp indicating when the deletion event occurred. EventTime can be used to query data at a certain point in time.</td>
</tr>
<tr id="parameter-RecordIdentifierValueAsString">
    <td><CopyableCode code="RecordIdentifierValueAsString" /></td>
    <td><code>string</code></td>
    <td>The value for the RecordIdentifier that uniquely identifies the record, in string format.</td>
</tr>
<tr id="parameter-feature_group_name">
    <td><CopyableCode code="feature_group_name" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the feature group to delete the record from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DeletionMode">
    <td><CopyableCode code="DeletionMode" /></td>
    <td><code>string</code></td>
    <td>The name of the deletion mode for deleting the record. By default, the deletion mode is set to SoftDelete.</td>
</tr>
<tr id="parameter-ExpirationTimeResponse">
    <td><CopyableCode code="ExpirationTimeResponse" /></td>
    <td><code>string</code></td>
    <td>Parameter to request ExpiresAt in response. If Enabled, GetRecord will return the value of ExpiresAt, if it is not null. If Disabled and null, GetRecord will return null.</td>
</tr>
<tr id="parameter-FeatureName">
    <td><CopyableCode code="FeatureName" /></td>
    <td><code>array</code></td>
    <td>List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.</td>
</tr>
<tr id="parameter-TargetStores">
    <td><CopyableCode code="TargetStores" /></td>
    <td><code>array</code></td>
    <td>A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the FeatureGroup.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_record"
    values={[
        { label: 'get_record', value: 'get_record' },
        { label: 'batch_get_record', value: 'batch_get_record' }
    ]}
>
<TabItem value="get_record">

Use for OnlineStore serving from a FeatureStore. Only the latest records stored in the OnlineStore can be retrieved. If no Record with RecordIdentifierValue is found, then an empty result is returned.

```sql
SELECT
expires_at,
record
FROM aws.sagemaker_featurestore_runtime.records
WHERE feature_group_name = '{{ feature_group_name }}' -- required
AND RecordIdentifierValueAsString = '{{ RecordIdentifierValueAsString }}' -- required
AND region = '{{ region }}' -- required
AND FeatureName = '{{ FeatureName }}'
AND ExpirationTimeResponse = '{{ ExpirationTimeResponse }}'
;
```
</TabItem>
<TabItem value="batch_get_record">

Retrieves a batch of Records from a FeatureGroup.

```sql
SELECT
errors,
records,
unprocessed_identifiers
FROM aws.sagemaker_featurestore_runtime.records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_record"
    values={[
        { label: 'put_record', value: 'put_record' }
    ]}
>
<TabItem value="put_record">

The PutRecord API is used to ingest a list of Records into your feature group. If a new record’s EventTime is greater, the new record is written to both the OnlineStore and OfflineStore. Otherwise, the record is a historic record and it is written only to the OfflineStore. You can specify the ingestion to be applied to the OnlineStore, OfflineStore, or both by using the TargetStores request parameter. You can set the ingested record to expire at a given time to live (TTL) duration after the record’s event time, ExpiresAt = EventTime + TtlDuration, by specifying the TtlDuration parameter. A record level TtlDuration is set when specifying the TtlDuration parameter using the PutRecord API call. If the input TtlDuration is null or unspecified, TtlDuration is set to the default feature group level TtlDuration. A record level TtlDuration supersedes the group level TtlDuration.

```sql
REPLACE aws.sagemaker_featurestore_runtime.records
SET 
Record = '{{ Record }}',
TargetStores = '{{ TargetStores }}',
TtlDuration = '{{ TtlDuration }}'
WHERE 
feature_group_name = '{{ feature_group_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_record"
    values={[
        { label: 'delete_record', value: 'delete_record' }
    ]}
>
<TabItem value="delete_record">

Deletes a Record from a FeatureGroup in the OnlineStore. Feature Store supports both SoftDelete and HardDelete. For SoftDelete (default), feature columns are set to null and the record is no longer retrievable by GetRecord or BatchGetRecord. For HardDelete, the complete Record is removed from the OnlineStore. In both cases, Feature Store appends the deleted record marker to the OfflineStore. The deleted record marker is a record with the same RecordIdentifer as the original, but with is_deleted value set to True, EventTime set to the delete input EventTime, and other feature values set to null. Note that the EventTime specified in DeleteRecord should be set later than the EventTime of the existing record in the OnlineStore for that RecordIdentifer. If it is not, the deletion does not occur: For SoftDelete, the existing (not deleted) record remains in the OnlineStore, though the delete record marker is still written to the OfflineStore. HardDelete returns EventTime: 400 ValidationException to indicate that the delete operation failed. No delete record marker is written to the OfflineStore. When a record is deleted from the OnlineStore, the deleted record marker is appended to the OfflineStore. If you have the Iceberg table format enabled for your OfflineStore, you can remove all history of a record from the OfflineStore using Amazon Athena or Apache Spark. For information on how to hard delete a record from the OfflineStore with the Iceberg table format enabled, see Delete records from the offline store.

```sql
DELETE FROM aws.sagemaker_featurestore_runtime.records
WHERE feature_group_name = '{{ feature_group_name }}' --required
AND RecordIdentifierValueAsString = '{{ RecordIdentifierValueAsString }}' --required
AND EventTime = '{{ EventTime }}' --required
AND region = '{{ region }}' --required
AND TargetStores = '{{ TargetStores }}'
AND DeletionMode = '{{ DeletionMode }}'
;
```
</TabItem>
</Tabs>
