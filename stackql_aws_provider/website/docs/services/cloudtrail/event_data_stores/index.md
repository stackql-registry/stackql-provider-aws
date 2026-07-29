--- 
title: event_data_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - event_data_stores
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>event_data_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_data_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.event_data_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_data_store"
    values={[
        { label: 'get_event_data_store', value: 'get_event_data_store' },
        { label: 'list_event_data_stores', value: 'list_event_data_stores' }
    ]}
>
<TabItem value="get_event_data_store">

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
    <td><CopyableCode code="advanced_event_selectors" /></td>
    <td><code>array</code></td>
    <td>The advanced event selectors used to select events for the data store.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_mode" /></td>
    <td><code>string</code></td>
    <td>The billing mode for the event data store. (EXTENDABLE_RETENTION_PRICING, FIXED_RETENTION_PRICING)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the event data store's creation.</td>
</tr>
<tr>
    <td><CopyableCode code="event_data_store_arn" /></td>
    <td><code>string</code></td>
    <td>The event data store Amazon Resource Number (ARN). (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federation_role_arn" /></td>
    <td><code>string</code></td>
    <td>If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:@=\+,\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federation_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the Lake query federation status. The status is ENABLED if Lake query federation is enabled, or DISABLED if Lake query federation is disabled. You cannot delete an event data store if the FederationStatus is ENABLED. (ENABLING, ENABLED, DISABLING, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the KMS key ID that encrypts the events delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the following format. arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012 (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the event data store includes events from all Regions, or only from the Region in which it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event data store. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an event data store is collecting logged events for an organization in Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="partition_keys" /></td>
    <td><code>array</code></td>
    <td>The partition keys for the event data store. To improve query performance and efficiency, CloudTrail Lake organizes event data into partitions based on values derived from partition keys.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the event data store, in days.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an event data store. (CREATED, ENABLED, PENDING_DELETION, STARTING_INGESTION, STOPPING_INGESTION, STOPPED_INGESTION)</td>
</tr>
<tr>
    <td><CopyableCode code="termination_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that termination protection is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Shows the time that an event data store was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_data_stores">

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
    <td><CopyableCode code="event_data_stores" /></td>
    <td><code>array</code></td>
    <td>Contains information about event data stores in the account, in the current Region.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token you can use to get the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_event_data_store"><CopyableCode code="get_event_data_store" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an event data store specified as either an ARN or the ID portion of the ARN.</td>
</tr>
<tr>
    <td><a href="#list_event_data_stores"><CopyableCode code="list_event_data_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all event data stores in the account, in the current Region.</td>
</tr>
<tr>
    <td><a href="#create_event_data_store"><CopyableCode code="create_event_data_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new event data store.</td>
</tr>
<tr>
    <td><a href="#update_event_data_store"><CopyableCode code="update_event_data_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a></td>
    <td></td>
    <td>Updates an event data store. The required EventDataStore value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. RetentionPeriod is in days, and valid values are integers between 7 and 3653 if the BillingMode is set to EXTENDABLE_RETENTION_PRICING, or between 7 and 2557 if BillingMode is set to FIXED_RETENTION_PRICING. By default, TerminationProtection is enabled. For event data stores for CloudTrail events, AdvancedEventSelectors includes or excludes management, data, or network activity events in your event data store. For more information about AdvancedEventSelectors, see AdvancedEventSelectors. For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, AdvancedEventSelectors includes events of that type in your event data store.</td>
</tr>
<tr>
    <td><a href="#delete_event_data_store"><CopyableCode code="delete_event_data_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the event data store specified by EventDataStore, which accepts an event data store ARN. After you run DeleteEventDataStore, the event data store enters a PENDING_DELETION state, and is automatically deleted after a wait period of seven days. TerminationProtectionEnabled must be set to False on the event data store and the FederationStatus must be DISABLED. You cannot delete an event data store if TerminationProtectionEnabled is True or the FederationStatus is ENABLED. After you run DeleteEventDataStore on an event data store, you cannot run ListQueries, DescribeQuery, or GetQueryResults on queries that are using an event data store in a PENDING_DELETION state. An event data store in the PENDING_DELETION state does not incur costs.</td>
</tr>
<tr>
    <td><a href="#start_event_data_store_ingestion"><CopyableCode code="start_event_data_store_ingestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a></td>
    <td></td>
    <td>Starts the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To start ingestion, the event data store Status must be STOPPED_INGESTION and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem.</td>
</tr>
<tr>
    <td><a href="#stop_event_data_store_ingestion"><CopyableCode code="stop_event_data_store_ingestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStore"><code>EventDataStore</code></a></td>
    <td></td>
    <td>Stops the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To stop ingestion, the event data store Status must be ENABLED and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem.</td>
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
    defaultValue="get_event_data_store"
    values={[
        { label: 'get_event_data_store', value: 'get_event_data_store' },
        { label: 'list_event_data_stores', value: 'list_event_data_stores' }
    ]}
>
<TabItem value="get_event_data_store">

Returns information about an event data store specified as either an ARN or the ID portion of the ARN.

```sql
SELECT
advanced_event_selectors,
billing_mode,
created_timestamp,
event_data_store_arn,
federation_role_arn,
federation_status,
kms_key_id,
multi_region_enabled,
name,
organization_enabled,
partition_keys,
retention_period,
status,
termination_protection_enabled,
updated_timestamp
FROM aws.cloudtrail.event_data_stores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_data_stores">

Returns information about all event data stores in the account, in the current Region.

```sql
SELECT
event_data_stores,
next_token
FROM aws.cloudtrail.event_data_stores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_data_store"
    values={[
        { label: 'create_event_data_store', value: 'create_event_data_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_data_store">

Creates a new event data store.

```sql
INSERT INTO aws.cloudtrail.event_data_stores (
Name,
AdvancedEventSelectors,
MultiRegionEnabled,
OrganizationEnabled,
RetentionPeriod,
TerminationProtectionEnabled,
TagsList,
KmsKeyId,
StartIngestion,
BillingMode,
region
)
SELECT 
'{{ Name }}',
'{{ AdvancedEventSelectors }}',
{{ MultiRegionEnabled }},
{{ OrganizationEnabled }},
{{ RetentionPeriod }},
{{ TerminationProtectionEnabled }},
'{{ TagsList }}',
'{{ KmsKeyId }}',
{{ StartIngestion }},
'{{ BillingMode }}',
'{{ region }}'
RETURNING
advanced_event_selectors,
billing_mode,
created_timestamp,
event_data_store_arn,
kms_key_id,
multi_region_enabled,
name,
organization_enabled,
retention_period,
status,
tags_list,
termination_protection_enabled,
updated_timestamp
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_data_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_data_stores resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the event data store.
    - name: AdvancedEventSelectors
      description: |
        The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store. For more information about how to use advanced event selectors to log CloudTrail events, see Log events by using advanced event selectors in the CloudTrail User Guide. For more information about how to use advanced event selectors to include Config configuration items in your event data store, see Create an event data store for Config configuration items in the CloudTrail User Guide. For more information about how to use advanced event selectors to include events outside of Amazon Web Services events in your event data store, see Create an integration to log events from outside Amazon Web Services in the CloudTrail User Guide.
      value:
        - Name: "{{ Name }}"
          FieldSelectors: "{{ FieldSelectors }}"
    - name: MultiRegionEnabled
      value: {{ MultiRegionEnabled }}
      description: |
        Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
    - name: OrganizationEnabled
      value: {{ OrganizationEnabled }}
      description: |
        Specifies whether an event data store collects events logged for an organization in Organizations.
    - name: RetentionPeriod
      value: {{ RetentionPeriod }}
      description: |
        The retention period of the event data store, in days. If BillingMode is set to EXTENDABLE_RETENTION_PRICING, you can set a retention period of up to 3653 days, the equivalent of 10 years. If BillingMode is set to FIXED_RETENTION_PRICING, you can set a retention period of up to 2557 days, the equivalent of seven years. CloudTrail Lake determines whether to retain an event by checking if the eventTime of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the eventTime is older than 90 days. If you plan to copy trail events to this event data store, we recommend that you consider both the age of the events that you want to copy as well as how long you want to keep the copied events in your event data store. For example, if you copy trail events that are 5 years old and specify a retention period of 7 years, the event data store will retain those events for two years.
    - name: TerminationProtectionEnabled
      value: {{ TerminationProtectionEnabled }}
      description: |
        Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
    - name: TagsList
      description: |
        A list of tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by alias/, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier. Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store. CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see Using multi-Region keys in the Key Management Service Developer Guide. Examples: alias/MyAliasName arn:aws:kms:us-east-2:123456789012:alias/MyAliasName arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012 12345678-1234-1234-1234-123456789012
    - name: StartIngestion
      value: {{ StartIngestion }}
      description: |
        Specifies whether the event data store should start ingesting live events. The default is true.
    - name: BillingMode
      value: "{{ BillingMode }}"
      description: |
        The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store. The following are the possible values: EXTENDABLE_RETENTION_PRICING - This billing mode is generally recommended if you want a flexible retention period of up to 3653 days (about 10 years). The default retention period for this billing mode is 366 days. FIXED_RETENTION_PRICING - This billing mode is recommended if you expect to ingest more than 25 TB of event data per month and need a retention period of up to 2557 days (about 7 years). The default retention period for this billing mode is 2557 days. The default value is EXTENDABLE_RETENTION_PRICING. For more information about CloudTrail pricing, see CloudTrail Pricing and Managing CloudTrail Lake costs.
      valid_values: ['EXTENDABLE_RETENTION_PRICING', 'FIXED_RETENTION_PRICING']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_data_store"
    values={[
        { label: 'update_event_data_store', value: 'update_event_data_store' }
    ]}
>
<TabItem value="update_event_data_store">

Updates an event data store. The required EventDataStore value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. RetentionPeriod is in days, and valid values are integers between 7 and 3653 if the BillingMode is set to EXTENDABLE_RETENTION_PRICING, or between 7 and 2557 if BillingMode is set to FIXED_RETENTION_PRICING. By default, TerminationProtection is enabled. For event data stores for CloudTrail events, AdvancedEventSelectors includes or excludes management, data, or network activity events in your event data store. For more information about AdvancedEventSelectors, see AdvancedEventSelectors. For event data stores for CloudTrail Insights events, Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, AdvancedEventSelectors includes events of that type in your event data store.

```sql
UPDATE aws.cloudtrail.event_data_stores
SET 
EventDataStore = '{{ EventDataStore }}',
Name = '{{ Name }}',
AdvancedEventSelectors = '{{ AdvancedEventSelectors }}',
MultiRegionEnabled = {{ MultiRegionEnabled }},
OrganizationEnabled = {{ OrganizationEnabled }},
RetentionPeriod = {{ RetentionPeriod }},
TerminationProtectionEnabled = {{ TerminationProtectionEnabled }},
KmsKeyId = '{{ KmsKeyId }}',
BillingMode = '{{ BillingMode }}'
WHERE 
region = '{{ region }}' --required
AND EventDataStore = '{{ EventDataStore }}' --required
RETURNING
advanced_event_selectors,
billing_mode,
created_timestamp,
event_data_store_arn,
federation_role_arn,
federation_status,
kms_key_id,
multi_region_enabled,
name,
organization_enabled,
retention_period,
status,
termination_protection_enabled,
updated_timestamp;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_data_store"
    values={[
        { label: 'delete_event_data_store', value: 'delete_event_data_store' }
    ]}
>
<TabItem value="delete_event_data_store">

Disables the event data store specified by EventDataStore, which accepts an event data store ARN. After you run DeleteEventDataStore, the event data store enters a PENDING_DELETION state, and is automatically deleted after a wait period of seven days. TerminationProtectionEnabled must be set to False on the event data store and the FederationStatus must be DISABLED. You cannot delete an event data store if TerminationProtectionEnabled is True or the FederationStatus is ENABLED. After you run DeleteEventDataStore on an event data store, you cannot run ListQueries, DescribeQuery, or GetQueryResults on queries that are using an event data store in a PENDING_DELETION state. An event data store in the PENDING_DELETION state does not incur costs.

```sql
DELETE FROM aws.cloudtrail.event_data_stores
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_event_data_store_ingestion"
    values={[
        { label: 'start_event_data_store_ingestion', value: 'start_event_data_store_ingestion' },
        { label: 'stop_event_data_store_ingestion', value: 'stop_event_data_store_ingestion' }
    ]}
>
<TabItem value="start_event_data_store_ingestion">

Starts the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To start ingestion, the event data store Status must be STOPPED_INGESTION and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem.

```sql
EXEC aws.cloudtrail.event_data_stores.start_event_data_store_ingestion 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}"
}'
;
```
</TabItem>
<TabItem value="stop_event_data_store_ingestion">

Stops the ingestion of live events on an event data store specified as either an ARN or the ID portion of the ARN. To stop ingestion, the event data store Status must be ENABLED and the eventCategory must be Management, Data, NetworkActivity, or ConfigurationItem.

```sql
EXEC aws.cloudtrail.event_data_stores.stop_event_data_store_ingestion 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}"
}'
;
```
</TabItem>
</Tabs>
