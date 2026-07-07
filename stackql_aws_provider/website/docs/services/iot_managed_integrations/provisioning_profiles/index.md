--- 
title: provisioning_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_profiles
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>provisioning_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioning_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.provisioning_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provisioning_profile"
    values={[
        { label: 'get_provisioning_profile', value: 'get_provisioning_profile' },
        { label: 'list_provisioning_profiles', value: 'list_provisioning_profiles' }
    ]}
>
<TabItem value="get_provisioning_profile">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the provisioning profile. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:provisioning-profile/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClaimCertificate" /></td>
    <td><code>string</code></td>
    <td>The body of the PEM-encoded claim certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The provisioning profile id. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning profile. (pattern: &lt;code&gt;&#91;0-9A-Za-z_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningType" /></td>
    <td><code>string</code></td>
    <td>The type of provisioning workflow the device uses for onboarding to IoT managed integrations. (FLEET_PROVISIONING, JITR)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a provisioning profile. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the provisioning profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioning_profiles">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the provisioning profile. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:provisioning-profile/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the provisioning profile. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the provisioning profile. (pattern: &lt;code&gt;&#91;0-9A-Za-z_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningType" /></td>
    <td><code>string</code></td>
    <td>The type of provisioning workflow the device uses for onboarding to IoT managed integrations. (FLEET_PROVISIONING, JITR)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a provisioning profile. (CREATE_IN_PROGRESS, CREATE_FAILED, CREATED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
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
    <td><a href="#get_provisioning_profile"><CopyableCode code="get_provisioning_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get details of a provisioning profile.</td>
</tr>
<tr>
    <td><a href="#list_provisioning_profiles"><CopyableCode code="list_provisioning_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List the provisioning profiles within the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_provisioning_profile"><CopyableCode code="create_provisioning_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProvisioningType"><code>ProvisioningType</code></a></td>
    <td></td>
    <td>Create a provisioning profile for executing device provisioning flows. The provisioning profile is a document that defines the set of resources and policies applied to a device during the provisioning process.</td>
</tr>
<tr>
    <td><a href="#delete_provisioning_profile"><CopyableCode code="delete_provisioning_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a provisioning profile.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The id of the provisioning profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_provisioning_profile"
    values={[
        { label: 'get_provisioning_profile', value: 'get_provisioning_profile' },
        { label: 'list_provisioning_profiles', value: 'list_provisioning_profiles' }
    ]}
>
<TabItem value="get_provisioning_profile">

Get details of a provisioning profile.

```sql
SELECT
Arn,
ClaimCertificate,
Id,
Name,
ProvisioningType,
Status,
Tags
FROM aws.iot_managed_integrations.provisioning_profiles
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioning_profiles">

List the provisioning profiles within the Amazon Web Services account.

```sql
SELECT
Arn,
Id,
Name,
ProvisioningType,
Status
FROM aws.iot_managed_integrations.provisioning_profiles
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioning_profile"
    values={[
        { label: 'create_provisioning_profile', value: 'create_provisioning_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioning_profile">

Create a provisioning profile for executing device provisioning flows. The provisioning profile is a document that defines the set of resources and policies applied to a device during the provisioning process.

```sql
INSERT INTO aws.iot_managed_integrations.provisioning_profiles (
ProvisioningType,
CaCertificate,
ClaimCertificate,
Name,
ClientToken,
Tags,
region
)
SELECT 
'{{ ProvisioningType }}' /* required */,
'{{ CaCertificate }}',
'{{ ClaimCertificate }}',
'{{ Name }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
ClaimCertificate,
ClaimCertificatePrivateKey,
Id,
Name,
ProvisioningType,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioning_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioning_profiles resource.
    - name: ProvisioningType
      value: "{{ ProvisioningType }}"
      valid_values: ['FLEET_PROVISIONING', 'JITR']
    - name: CaCertificate
      value: "{{ CaCertificate }}"
    - name: ClaimCertificate
      value: "{{ ClaimCertificate }}"
    - name: Name
      value: "{{ Name }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioning_profile"
    values={[
        { label: 'delete_provisioning_profile', value: 'delete_provisioning_profile' }
    ]}
>
<TabItem value="delete_provisioning_profile">

Delete a provisioning profile.

```sql
DELETE FROM aws.iot_managed_integrations.provisioning_profiles
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
