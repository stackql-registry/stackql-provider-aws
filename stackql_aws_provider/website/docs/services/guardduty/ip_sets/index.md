--- 
title: ip_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sets
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

Creates, updates, deletes, gets or lists an <code>ip_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.ip_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ip_set"
    values={[
        { label: 'get_ip_set', value: 'get_ip_set' },
        { label: 'list_ip_sets', value: 'list_ip_sets' }
    ]}
>
<TabItem value="get_ip_set">

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
    <td><CopyableCode code="expected_bucket_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the location parameter. This field appears in the response only if it was provided during IPSet creation or update.</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the file that contains the IPSet. (TXT, STIX, OTX_CSV, ALIEN_VAULT, PROOF_POINT, FIRE_EYE)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The URI of the file that contains the IPSet.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the IPSet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of IPSet file that was uploaded. (INACTIVE, ACTIVATING, ACTIVE, DEACTIVATING, ERROR, DELETE_PENDING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the IPSet resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ip_sets">

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
    <td><CopyableCode code="ip_set_id" /></td>
    <td><code>string</code></td>
    <td>The IDs of the IPSet resources.</td>
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
    <td><a href="#get_ip_set"><CopyableCode code="get_ip_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-ip_set_id"><code>ip_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the IPSet specified by the ipSetId.</td>
</tr>
<tr>
    <td><a href="#list_ip_sets"><CopyableCode code="list_ip_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.</td>
</tr>
<tr>
    <td><a href="#create_ip_set"><CopyableCode code="create_ip_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Activate"><code>Activate</code></a></td>
    <td></td>
    <td>Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.</td>
</tr>
<tr>
    <td><a href="#update_ip_set"><CopyableCode code="update_ip_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-ip_set_id"><code>ip_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the IPSet specified by the IPSet ID.</td>
</tr>
<tr>
    <td><a href="#delete_ip_set"><CopyableCode code="delete_ip_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-ip_set_id"><code>ip_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the IPSet specified by the ipSetId. IPSets are called trusted IP lists in the console user interface.</td>
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
    <td>The unique ID of the detector associated with the IPSet. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-ip_set_id">
    <td><CopyableCode code="ip_set_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the IPSet to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</td>
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
    defaultValue="get_ip_set"
    values={[
        { label: 'get_ip_set', value: 'get_ip_set' },
        { label: 'list_ip_sets', value: 'list_ip_sets' }
    ]}
>
<TabItem value="get_ip_set">

Retrieves the IPSet specified by the ipSetId.

```sql
SELECT
expected_bucket_owner,
format,
location,
name,
status,
tags
FROM aws.guardduty.ip_sets
WHERE detector_id = '{{ detector_id }}' -- required
AND ip_set_id = '{{ ip_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ip_sets">

Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated administrator account.

```sql
SELECT
ip_set_id
FROM aws.guardduty.ip_sets
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
    defaultValue="create_ip_set"
    values={[
        { label: 'create_ip_set', value: 'create_ip_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ip_set">

Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with Amazon Web Services infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the administrator account can use this operation.

```sql
INSERT INTO aws.guardduty.ip_sets (
Name,
Format,
Location,
Activate,
ClientToken,
Tags,
ExpectedBucketOwner,
detector_id,
region
)
SELECT 
'{{ Name }}',
'{{ Format }}',
'{{ Location }}',
{{ Activate }} /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ ExpectedBucketOwner }}',
'{{ detector_id }}',
'{{ region }}'
RETURNING
ip_set_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_sets
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the ip_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ip_sets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Format
      value: "{{ Format }}"
      valid_values: ['TXT', 'STIX', 'OTX_CSV', 'ALIEN_VAULT', 'PROOF_POINT', 'FIRE_EYE']
    - name: Location
      value: "{{ Location }}"
    - name: Activate
      value: {{ Activate }}
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ExpectedBucketOwner
      value: "{{ ExpectedBucketOwner }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ip_set"
    values={[
        { label: 'update_ip_set', value: 'update_ip_set' }
    ]}
>
<TabItem value="update_ip_set">

Updates the IPSet specified by the IPSet ID.

```sql
UPDATE aws.guardduty.ip_sets
SET 
Name = '{{ Name }}',
Location = '{{ Location }}',
Activate = {{ Activate }},
ExpectedBucketOwner = '{{ ExpectedBucketOwner }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND ip_set_id = '{{ ip_set_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ip_set"
    values={[
        { label: 'delete_ip_set', value: 'delete_ip_set' }
    ]}
>
<TabItem value="delete_ip_set">

Deletes the IPSet specified by the ipSetId. IPSets are called trusted IP lists in the console user interface.

```sql
DELETE FROM aws.guardduty.ip_sets
WHERE detector_id = '{{ detector_id }}' --required
AND ip_set_id = '{{ ip_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
