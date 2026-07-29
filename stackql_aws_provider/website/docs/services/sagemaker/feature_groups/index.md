--- 
title: feature_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - feature_groups
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>feature_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feature_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.feature_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_feature_group"
    values={[
        { label: 'describe_feature_group', value: 'describe_feature_group' },
        { label: 'list_feature_groups', value: 'list_feature_groups' }
    ]}
>
<TabItem value="describe_feature_group">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when SageMaker created the FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A free form description of the feature group.</td>
</tr>
<tr>
    <td><CopyableCode code="event_time_feature_name" /></td>
    <td><code>string</code></td>
    <td>The name of the feature that stores the EventTime of a Record in a FeatureGroup. An EventTime is a point in time when a new event occurs that corresponds to the creation or update of a Record in a FeatureGroup. All Records in the FeatureGroup have a corresponding EventTime. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-_&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the FeatureGroup failed to be replicated in the OfflineStore. This is failure can occur because: The FeatureGroup could not be created in the OfflineStore. The FeatureGroup could not be deleted from the OfflineStore.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_definitions" /></td>
    <td><code>array</code></td>
    <td>A list of the Features in the FeatureGroup. Each feature is defined by a FeatureName and FeatureType.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the FeatureGroup. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:feature-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_name" /></td>
    <td><code>string</code></td>
    <td>he name of the FeatureGroup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;_-&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of the feature group. (Creating, Created, CreateFailed, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating when the feature group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_status" /></td>
    <td><code>object</code></td>
    <td>A value indicating whether the update made to the feature group was successful.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to resume pagination of the list of Features (FeatureDefinitions). (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="offline_store_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the offline store. It includes the following configurations: Amazon S3 location of the offline store. Configuration of the Glue data catalog. Table format of the offline store. Option to disable the automatic creation of a Glue table for the offline store. Encryption configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="offline_store_status" /></td>
    <td><code>object</code></td>
    <td>The status of the OfflineStore. Notifies you if replicating data into the OfflineStore has failed. Returns either: Active or Blocked</td>
</tr>
<tr>
    <td><CopyableCode code="online_store_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the OnlineStore.</td>
</tr>
<tr>
    <td><CopyableCode code="online_store_total_size_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the OnlineStore in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="record_identifier_feature_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Feature used for RecordIdentifier, whose value uniquely identifies a record stored in the feature store. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-_&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="throughput_config" /></td>
    <td><code>object</code></td>
    <td>Active throughput configuration of the feature group. There are two modes: ON_DEMAND and PROVISIONED. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled. Note: PROVISIONED throughput mode is supported only for feature groups that are offline-only, or use the Standard tier online store.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_feature_groups">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp indicating the time of creation time of the FeatureGroup.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_arn" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the FeatureGroup. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:feature-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of FeatureGroup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;_-&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of a FeatureGroup. The status can be any of the following: Creating, Created, CreateFail, Deleting or DetailFail. (Creating, Created, CreateFailed, Deleting, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="offline_store_status" /></td>
    <td><code>object</code></td>
    <td>Notifies you if replicating data into the OfflineStore has failed. Returns either: Active or Blocked.</td>
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
    <td><a href="#describe_feature_group"><CopyableCode code="describe_feature_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to describe a FeatureGroup. The response includes information on the creation time, FeatureGroup name, the unique identifier for each FeatureGroup, and more.</td>
</tr>
<tr>
    <td><a href="#list_feature_groups"><CopyableCode code="list_feature_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List FeatureGroups based on given filter and order.</td>
</tr>
<tr>
    <td><a href="#create_feature_group"><CopyableCode code="create_feature_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FeatureGroupName"><code>FeatureGroupName</code></a>, <a href="#parameter-RecordIdentifierFeatureName"><code>RecordIdentifierFeatureName</code></a>, <a href="#parameter-EventTimeFeatureName"><code>EventTimeFeatureName</code></a>, <a href="#parameter-FeatureDefinitions"><code>FeatureDefinitions</code></a></td>
    <td></td>
    <td>Create a new FeatureGroup. A FeatureGroup is a group of Features defined in the FeatureStore to describe a Record. The FeatureGroup defines the schema and features contained in the FeatureGroup. A FeatureGroup definition is composed of a list of Features, a RecordIdentifierFeatureName, an EventTimeFeatureName and configurations for its OnlineStore and OfflineStore. Check Amazon Web Services service quotas to see the FeatureGroups quota for your Amazon Web Services account. Note that it can take approximately 10-15 minutes to provision an OnlineStore FeatureGroup with the InMemory StorageType. You must include at least one of OnlineStoreConfig and OfflineStoreConfig to create a FeatureGroup.</td>
</tr>
<tr>
    <td><a href="#update_feature_group"><CopyableCode code="update_feature_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FeatureGroupName"><code>FeatureGroupName</code></a></td>
    <td></td>
    <td>Updates the feature group by either adding features or updating the online store configuration. Use one of the following request parameters at a time while using the UpdateFeatureGroup API. You can add features for your feature group using the FeatureAdditions request parameter. Features cannot be removed from a feature group. You can update the online store configuration by using the OnlineStoreConfig request parameter. If a TtlDuration is specified, the default TtlDuration applies for all records added to the feature group after the feature group is updated. If a record level TtlDuration exists from using the PutRecord API, the record level TtlDuration applies to that record instead of the default TtlDuration. To remove the default TtlDuration from an existing feature group, use the UpdateFeatureGroup API and set the TtlDuration Unit and Value to null.</td>
</tr>
<tr>
    <td><a href="#delete_feature_group"><CopyableCode code="delete_feature_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the FeatureGroup and any data that was written to the OnlineStore of the FeatureGroup. Data cannot be accessed from the OnlineStore immediately after DeleteFeatureGroup is called. Data written into the OfflineStore will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your OfflineStore are not deleted. Note that it can take approximately 10-15 minutes to delete an OnlineStore FeatureGroup with the InMemory StorageType.</td>
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
    defaultValue="describe_feature_group"
    values={[
        { label: 'describe_feature_group', value: 'describe_feature_group' },
        { label: 'list_feature_groups', value: 'list_feature_groups' }
    ]}
>
<TabItem value="describe_feature_group">

Use this operation to describe a FeatureGroup. The response includes information on the creation time, FeatureGroup name, the unique identifier for each FeatureGroup, and more.

```sql
SELECT
creation_time,
description,
event_time_feature_name,
failure_reason,
feature_definitions,
feature_group_arn,
feature_group_name,
feature_group_status,
last_modified_time,
last_update_status,
next_token,
offline_store_config,
offline_store_status,
online_store_config,
online_store_total_size_bytes,
record_identifier_feature_name,
role_arn,
throughput_config
FROM aws.sagemaker.feature_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_feature_groups">

List FeatureGroups based on given filter and order.

```sql
SELECT
creation_time,
feature_group_arn,
feature_group_name,
feature_group_status,
offline_store_status
FROM aws.sagemaker.feature_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_feature_group"
    values={[
        { label: 'create_feature_group', value: 'create_feature_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_feature_group">

Create a new FeatureGroup. A FeatureGroup is a group of Features defined in the FeatureStore to describe a Record. The FeatureGroup defines the schema and features contained in the FeatureGroup. A FeatureGroup definition is composed of a list of Features, a RecordIdentifierFeatureName, an EventTimeFeatureName and configurations for its OnlineStore and OfflineStore. Check Amazon Web Services service quotas to see the FeatureGroups quota for your Amazon Web Services account. Note that it can take approximately 10-15 minutes to provision an OnlineStore FeatureGroup with the InMemory StorageType. You must include at least one of OnlineStoreConfig and OfflineStoreConfig to create a FeatureGroup.

```sql
INSERT INTO aws.sagemaker.feature_groups (
FeatureGroupName,
RecordIdentifierFeatureName,
EventTimeFeatureName,
FeatureDefinitions,
OnlineStoreConfig,
OfflineStoreConfig,
ThroughputConfig,
RoleArn,
Description,
Tags,
region
)
SELECT 
'{{ FeatureGroupName }}' /* required */,
'{{ RecordIdentifierFeatureName }}' /* required */,
'{{ EventTimeFeatureName }}' /* required */,
'{{ FeatureDefinitions }}' /* required */,
'{{ OnlineStoreConfig }}',
'{{ OfflineStoreConfig }}',
'{{ ThroughputConfig }}',
'{{ RoleArn }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
feature_group_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: feature_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the feature_groups resource.
    - name: FeatureGroupName
      value: "{{ FeatureGroupName }}"
      description: |
        The name of the FeatureGroup. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account. The name: Must start with an alphanumeric character. Can only include alphanumeric characters, underscores, and hyphens. Spaces are not allowed.
    - name: RecordIdentifierFeatureName
      value: "{{ RecordIdentifierFeatureName }}"
      description: |
        The name of the Feature whose value uniquely identifies a Record defined in the FeatureStore. Only the latest record per identifier value will be stored in the OnlineStore. RecordIdentifierFeatureName must be one of feature definitions' names. You use the RecordIdentifierFeatureName to access data in a FeatureStore. This name: Must start with an alphanumeric character. Can only contains alphanumeric characters, hyphens, underscores. Spaces are not allowed.
    - name: EventTimeFeatureName
      value: "{{ EventTimeFeatureName }}"
      description: |
        The name of the feature that stores the EventTime of a Record in a FeatureGroup. An EventTime is a point in time when a new event occurs that corresponds to the creation or update of a Record in a FeatureGroup. All Records in the FeatureGroup must have a corresponding EventTime. An EventTime can be a String or Fractional. Fractional: EventTime feature values must be a Unix timestamp in seconds. String: EventTime feature values must be an ISO-8601 string in the format. The following formats are supported yyyy-MM-dd'T'HH:mm:ssZ and yyyy-MM-dd'T'HH:mm:ss.SSSZ where yyyy, MM, and dd represent the year, month, and day respectively and HH, mm, ss, and if applicable, SSS represent the hour, month, second and milliseconds respsectively. 'T' and Z are constants.
    - name: FeatureDefinitions
      description: |
        A list of Feature names and types. Name and Type is compulsory per Feature. Valid feature FeatureTypes are Integral, Fractional and String. FeatureNames cannot be any of the following: is_deleted, write_time, api_invocation_time You can create up to 2,500 FeatureDefinitions per FeatureGroup.
      value:
        - FeatureName: "{{ FeatureName }}"
          FeatureType: "{{ FeatureType }}"
          CollectionType: "{{ CollectionType }}"
          CollectionConfig:
            VectorConfig:
              Dimension: {{ Dimension }}
    - name: OnlineStoreConfig
      description: |
        You can turn the OnlineStore on or off by specifying True for the EnableOnlineStore flag in OnlineStoreConfig. You can also include an Amazon Web Services KMS key ID (KMSKeyId) for at-rest encryption of the OnlineStore. The default value is False.
      value:
        SecurityConfig:
          KmsKeyId: "{{ KmsKeyId }}"
        EnableOnlineStore: {{ EnableOnlineStore }}
        TtlDuration:
          Unit: "{{ Unit }}"
          Value: {{ Value }}
        StorageType: "{{ StorageType }}"
    - name: OfflineStoreConfig
      description: |
        Use this to configure an OfflineFeatureStore. This parameter allows you to specify: The Amazon Simple Storage Service (Amazon S3) location of an OfflineStore. A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data catalog. An KMS encryption key to encrypt the Amazon S3 location used for OfflineStore. If KMS encryption key is not specified, by default we encrypt all data at rest using Amazon Web Services KMS key. By defining your bucket-level key for SSE, you can reduce Amazon Web Services KMS requests costs by up to 99 percent. Format for the offline store table. Supported formats are Glue (Default) and Apache Iceberg. To learn more about this parameter, see OfflineStoreConfig.
      value:
        S3StorageConfig:
          S3Uri: "{{ S3Uri }}"
          KmsKeyId: "{{ KmsKeyId }}"
          ResolvedOutputS3Uri: "{{ ResolvedOutputS3Uri }}"
        DisableGlueTableCreation: {{ DisableGlueTableCreation }}
        DataCatalogConfig:
          TableName: "{{ TableName }}"
          Catalog: "{{ Catalog }}"
          Database: "{{ Database }}"
        TableFormat: "{{ TableFormat }}"
    - name: ThroughputConfig
      description: |
        Used to set feature group throughput configuration. There are two modes: ON_DEMAND and PROVISIONED. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled. Note: PROVISIONED throughput mode is supported only for feature groups that are offline-only, or use the Standard tier online store.
      value:
        ThroughputMode: "{{ ThroughputMode }}"
        ProvisionedReadCapacityUnits: {{ ProvisionedReadCapacityUnits }}
        ProvisionedWriteCapacityUnits: {{ ProvisionedWriteCapacityUnits }}
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided.
    - name: Description
      value: "{{ Description }}"
      description: |
        A free-form description of a FeatureGroup.
    - name: Tags
      description: |
        Tags used to identify Features in each FeatureGroup.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_feature_group"
    values={[
        { label: 'update_feature_group', value: 'update_feature_group' }
    ]}
>
<TabItem value="update_feature_group">

Updates the feature group by either adding features or updating the online store configuration. Use one of the following request parameters at a time while using the UpdateFeatureGroup API. You can add features for your feature group using the FeatureAdditions request parameter. Features cannot be removed from a feature group. You can update the online store configuration by using the OnlineStoreConfig request parameter. If a TtlDuration is specified, the default TtlDuration applies for all records added to the feature group after the feature group is updated. If a record level TtlDuration exists from using the PutRecord API, the record level TtlDuration applies to that record instead of the default TtlDuration. To remove the default TtlDuration from an existing feature group, use the UpdateFeatureGroup API and set the TtlDuration Unit and Value to null.

```sql
UPDATE aws.sagemaker.feature_groups
SET 
FeatureGroupName = '{{ FeatureGroupName }}',
FeatureAdditions = '{{ FeatureAdditions }}',
OnlineStoreConfig = '{{ OnlineStoreConfig }}',
ThroughputConfig = '{{ ThroughputConfig }}'
WHERE 
region = '{{ region }}' --required
AND FeatureGroupName = '{{ FeatureGroupName }}' --required
RETURNING
feature_group_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_feature_group"
    values={[
        { label: 'delete_feature_group', value: 'delete_feature_group' }
    ]}
>
<TabItem value="delete_feature_group">

Delete the FeatureGroup and any data that was written to the OnlineStore of the FeatureGroup. Data cannot be accessed from the OnlineStore immediately after DeleteFeatureGroup is called. Data written into the OfflineStore will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your OfflineStore are not deleted. Note that it can take approximately 10-15 minutes to delete an OnlineStore FeatureGroup with the InMemory StorageType.

```sql
DELETE FROM aws.sagemaker.feature_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
