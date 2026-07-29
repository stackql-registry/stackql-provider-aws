--- 
title: threat_entity_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - threat_entity_sets
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>threat_entity_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="threat_entity_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.threat_entity_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_threat_entity_set"
    values={[
        { label: 'get_threat_entity_set', value: 'get_threat_entity_set' },
        { label: 'list_threat_entity_sets', value: 'list_threat_entity_sets' }
    ]}
>
<TabItem value="get_threat_entity_set">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the associated threat entity set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>string</code></td>
    <td>The error details when the status is shown as ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="expected_bucket_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the file that contains the threat entity set. (TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The URI of the file that contains the threat entity set.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the threat entity set associated with the specified threatEntitySetId.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the associated threat entity set. (INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the threat entity set resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the associated threat entity set was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_threat_entity_sets">

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
    <td><CopyableCode code="threat_entity_set_id" /></td>
    <td><code>string</code></td>
    <td>The IDs of the threat entity set resources.</td>
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
    <td><a href="#get_threat_entity_set"><CopyableCode code="get_threat_entity_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-threat_entity_set_id"><code>threat_entity_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the threat entity set associated with the specified threatEntitySetId.</td>
</tr>
<tr>
    <td><a href="#list_threat_entity_sets"><CopyableCode code="list_threat_entity_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the threat entity sets that are returned as a response, belong to the administrator account.</td>
</tr>
<tr>
    <td><a href="#create_threat_entity_set"><CopyableCode code="create_threat_entity_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Activate"><code>Activate</code></a></td>
    <td></td>
    <td>Creates a new threat entity set. In a threat entity set, you can provide known malicious IP addresses and domains for your Amazon Web Services environment. GuardDuty generates findings based on the entries in the threat entity sets. Only users of the administrator account can manage entity sets, which automatically apply to member accounts.</td>
</tr>
<tr>
    <td><a href="#update_threat_entity_set"><CopyableCode code="update_threat_entity_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-threat_entity_set_id"><code>threat_entity_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the threat entity set associated with the specified threatEntitySetId.</td>
</tr>
<tr>
    <td><a href="#delete_threat_entity_set"><CopyableCode code="delete_threat_entity_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-threat_entity_set_id"><code>threat_entity_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the threat entity set that is associated with the specified threatEntitySetId.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector associated with the threat entity set resource. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-threat_entity_set_id">
    <td><CopyableCode code="threat_entity_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that helps GuardDuty identify which threat entity set needs to be deleted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_threat_entity_set"
    values={[
        { label: 'get_threat_entity_set', value: 'get_threat_entity_set' },
        { label: 'list_threat_entity_sets', value: 'list_threat_entity_sets' }
    ]}
>
<TabItem value="get_threat_entity_set">

Retrieves the threat entity set associated with the specified threatEntitySetId.

```sql
SELECT
created_at,
error_details,
expected_bucket_owner,
format,
location,
name,
status,
tags,
updated_at
FROM aws.guardduty.threat_entity_sets
WHERE detector_id = '{{ detector_id }}' -- required
AND threat_entity_set_id = '{{ threat_entity_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_threat_entity_sets">

Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this operation from a member account, the threat entity sets that are returned as a response, belong to the administrator account.

```sql
SELECT
threat_entity_set_id
FROM aws.guardduty.threat_entity_sets
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_threat_entity_set"
    values={[
        { label: 'create_threat_entity_set', value: 'create_threat_entity_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_threat_entity_set">

Creates a new threat entity set. In a threat entity set, you can provide known malicious IP addresses and domains for your Amazon Web Services environment. GuardDuty generates findings based on the entries in the threat entity sets. Only users of the administrator account can manage entity sets, which automatically apply to member accounts.

```sql
INSERT INTO aws.guardduty.threat_entity_sets (
Name,
Format,
Location,
ExpectedBucketOwner,
Activate,
ClientToken,
Tags,
detector_id,
region
)
SELECT 
'{{ Name }}',
'{{ Format }}',
'{{ Location }}',
'{{ ExpectedBucketOwner }}',
{{ Activate }} /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ detector_id }}',
'{{ region }}'
RETURNING
threat_entity_set_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: threat_entity_sets
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the threat_entity_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the threat_entity_sets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Format
      value: "{{ Format }}"
      valid_values: ['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE']
    - name: Location
      value: "{{ Location }}"
    - name: ExpectedBucketOwner
      value: "{{ ExpectedBucketOwner }}"
    - name: Activate
      value: {{ Activate }}
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_threat_entity_set"
    values={[
        { label: 'update_threat_entity_set', value: 'update_threat_entity_set' }
    ]}
>
<TabItem value="update_threat_entity_set">

Updates the threat entity set associated with the specified threatEntitySetId.

```sql
UPDATE aws.guardduty.threat_entity_sets
SET 
Name = '{{ Name }}',
Location = '{{ Location }}',
ExpectedBucketOwner = '{{ ExpectedBucketOwner }}',
Activate = {{ Activate }}
WHERE 
detector_id = '{{ detector_id }}' --required
AND threat_entity_set_id = '{{ threat_entity_set_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_threat_entity_set"
    values={[
        { label: 'delete_threat_entity_set', value: 'delete_threat_entity_set' }
    ]}
>
<TabItem value="delete_threat_entity_set">

Deletes the threat entity set that is associated with the specified threatEntitySetId.

```sql
DELETE FROM aws.guardduty.threat_entity_sets
WHERE detector_id = '{{ detector_id }}' --required
AND threat_entity_set_id = '{{ threat_entity_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
