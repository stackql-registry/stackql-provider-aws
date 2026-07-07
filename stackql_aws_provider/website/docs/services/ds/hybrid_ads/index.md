--- 
title: hybrid_ads
hide_title: false
hide_table_of_contents: false
keywords:
  - hybrid_ads
  - ds
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

Creates, updates, deletes, gets or lists a <code>hybrid_ads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hybrid_ads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.hybrid_ads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_hybrid_ad"><CopyableCode code="create_hybrid_ad" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretArn"><code>SecretArn</code></a>, <a href="#parameter-AssessmentId"><code>AssessmentId</code></a></td>
    <td></td>
    <td>Creates a hybrid directory that connects your self-managed Active Directory (AD) infrastructure and Amazon Web Services. You must have a successful directory assessment using StartADAssessment to validate your environment compatibility before you use this operation. Updates are applied asynchronously. Use DescribeDirectories to monitor the progress of directory creation.</td>
</tr>
<tr>
    <td><a href="#update_hybrid_ad"><CopyableCode code="update_hybrid_ad" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing hybrid directory. You can recover hybrid directory administrator account or modify self-managed instance settings. Updates are applied asynchronously. Use DescribeHybridADUpdate to monitor the progress of configuration changes. The InstanceIds must have a one-to-one correspondence with CustomerDnsIps, meaning that if the IP address for instance i-10243410 is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the input arrays must maintain the same order relationship, either &#91;10.24.34.100, 10.24.34.200&#93; paired with &#91;i-10243410, i-10243420&#93; or &#91;10.24.34.200, 10.24.34.100&#93; paired with &#91;i-10243420, i-10243410&#93;. You must provide at least one update to UpdateHybridADRequest$HybridAdministratorAccountUpdate or UpdateHybridADRequest$SelfManagedInstancesSettings.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_hybrid_ad"
    values={[
        { label: 'create_hybrid_ad', value: 'create_hybrid_ad' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hybrid_ad">

Creates a hybrid directory that connects your self-managed Active Directory (AD) infrastructure and Amazon Web Services. You must have a successful directory assessment using StartADAssessment to validate your environment compatibility before you use this operation. Updates are applied asynchronously. Use DescribeDirectories to monitor the progress of directory creation.

```sql
INSERT INTO aws.ds.hybrid_ads (
SecretArn,
AssessmentId,
Tags,
region
)
SELECT 
'{{ SecretArn }}' /* required */,
'{{ AssessmentId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
DirectoryId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hybrid_ads
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hybrid_ads resource.
    - name: SecretArn
      value: "{{ SecretArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials for the service account used to join hybrid domain controllers to your self-managed AD domain. This secret is used once and not stored. The secret must contain key-value pairs with keys matching customerAdAdminDomainUsername and customerAdAdminDomainPassword. For example: {"customerAdAdminDomainUsername":"carlos_salazar","customerAdAdminDomainPassword":"ExamplePassword123!"}.
    - name: AssessmentId
      value: "{{ AssessmentId }}"
      description: |
        The unique identifier of the successful directory assessment that validates your self-managed AD environment. You must have a successful directory assessment before you create a hybrid directory.
    - name: Tags
      description: |
        The tags to be assigned to the directory. Each tag consists of a key and value pair. You can specify multiple tags as a list.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hybrid_ad"
    values={[
        { label: 'update_hybrid_ad', value: 'update_hybrid_ad' }
    ]}
>
<TabItem value="update_hybrid_ad">

Updates the configuration of an existing hybrid directory. You can recover hybrid directory administrator account or modify self-managed instance settings. Updates are applied asynchronously. Use DescribeHybridADUpdate to monitor the progress of configuration changes. The InstanceIds must have a one-to-one correspondence with CustomerDnsIps, meaning that if the IP address for instance i-10243410 is 10.24.34.100 and the IP address for instance i-10243420 is 10.24.34.200, then the input arrays must maintain the same order relationship, either [10.24.34.100, 10.24.34.200] paired with [i-10243410, i-10243420] or [10.24.34.200, 10.24.34.100] paired with [i-10243420, i-10243410]. You must provide at least one update to UpdateHybridADRequest$HybridAdministratorAccountUpdate or UpdateHybridADRequest$SelfManagedInstancesSettings.

```sql
UPDATE aws.ds.hybrid_ads
SET 
DirectoryId = '{{ DirectoryId }}',
HybridAdministratorAccountUpdate = '{{ HybridAdministratorAccountUpdate }}',
SelfManagedInstancesSettings = '{{ SelfManagedInstancesSettings }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
RETURNING
AssessmentId,
DirectoryId;
```
</TabItem>
</Tabs>
