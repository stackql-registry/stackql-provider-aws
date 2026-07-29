--- 
title: license_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - license_versions
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_license_versions"
    values={[
        { label: 'list_license_versions', value: 'list_license_versions' }
    ]}
>
<TabItem value="list_license_versions">

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
    <td><CopyableCode code="licenses" /></td>
    <td><code>array</code></td>
    <td>License details.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
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
    <td><a href="#list_license_versions"><CopyableCode code="list_license_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all versions of the specified license.</td>
</tr>
<tr>
    <td><a href="#create_license_version"><CopyableCode code="create_license_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseArn"><code>LicenseArn</code></a>, <a href="#parameter-LicenseName"><code>LicenseName</code></a>, <a href="#parameter-ProductName"><code>ProductName</code></a>, <a href="#parameter-Issuer"><code>Issuer</code></a>, <a href="#parameter-HomeRegion"><code>HomeRegion</code></a>, <a href="#parameter-Validity"><code>Validity</code></a>, <a href="#parameter-Entitlements"><code>Entitlements</code></a>, <a href="#parameter-ConsumptionConfiguration"><code>ConsumptionConfiguration</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a new version of the specified license.</td>
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
    defaultValue="list_license_versions"
    values={[
        { label: 'list_license_versions', value: 'list_license_versions' }
    ]}
>
<TabItem value="list_license_versions">

Lists all versions of the specified license.

```sql
SELECT
licenses,
next_token
FROM aws.license_manager.license_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_version"
    values={[
        { label: 'create_license_version', value: 'create_license_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_version">

Creates a new version of the specified license.

```sql
INSERT INTO aws.license_manager.license_versions (
LicenseArn,
LicenseName,
ProductName,
Issuer,
HomeRegion,
Validity,
LicenseMetadata,
Entitlements,
ConsumptionConfiguration,
Status,
ClientToken,
SourceVersion,
region
)
SELECT 
'{{ LicenseArn }}' /* required */,
'{{ LicenseName }}' /* required */,
'{{ ProductName }}' /* required */,
'{{ Issuer }}' /* required */,
'{{ HomeRegion }}' /* required */,
'{{ Validity }}' /* required */,
'{{ LicenseMetadata }}',
'{{ Entitlements }}' /* required */,
'{{ ConsumptionConfiguration }}' /* required */,
'{{ Status }}',
'{{ ClientToken }}' /* required */,
'{{ SourceVersion }}',
'{{ region }}'
RETURNING
license_arn,
status,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_versions resource.
    - name: LicenseArn
      value: "{{ LicenseArn }}"
      description: |
        Amazon Resource Name (ARN) of the license.
    - name: LicenseName
      value: "{{ LicenseName }}"
      description: |
        License name.
    - name: ProductName
      value: "{{ ProductName }}"
      description: |
        Product name.
    - name: Issuer
      description: |
        License issuer.
      value:
        Name: "{{ Name }}"
        SignKey: "{{ SignKey }}"
    - name: HomeRegion
      value: "{{ HomeRegion }}"
      description: |
        Home Region of the license.
    - name: Validity
      description: |
        Date and time range during which the license is valid, in ISO8601-UTC format.
      value:
        Begin: "{{ Begin }}"
        End: "{{ End }}"
    - name: LicenseMetadata
      description: |
        Information about the license.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: Entitlements
      description: |
        License entitlements.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
          MaxCount: {{ MaxCount }}
          Overage: {{ Overage }}
          Unit: "{{ Unit }}"
          AllowCheckIn: {{ AllowCheckIn }}
    - name: ConsumptionConfiguration
      description: |
        Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.
      value:
        RenewType: "{{ RenewType }}"
        ProvisionalConfiguration:
          MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
        BorrowConfiguration:
          AllowEarlyCheckIn: {{ AllowEarlyCheckIn }}
          MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
    - name: Status
      value: "{{ Status }}"
      description: |
        License status.
      valid_values: ['AVAILABLE', 'PENDING_AVAILABLE', 'DEACTIVATED', 'SUSPENDED', 'EXPIRED', 'PENDING_DELETE', 'DELETED']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: SourceVersion
      value: "{{ SourceVersion }}"
      description: |
        Current version of the license.
`}</CodeBlock>

</TabItem>
</Tabs>
