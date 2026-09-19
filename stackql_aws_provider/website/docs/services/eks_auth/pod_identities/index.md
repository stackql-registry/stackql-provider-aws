--- 
title: pod_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - pod_identities
  - eks_auth
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

Creates, updates, deletes, gets or lists a <code>pod_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pod_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks_auth.pod_identities" /></td></tr>
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
    <td><a href="#assume_role_for_pod_identity"><CopyableCode code="assume_role_for_pod_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cluster_name"><code>cluster_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent. We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if credentials from an EKS Pod Identity association are available in the pod, the latest versions of the SDKs use them automatically.</td>
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
<tr id="parameter-cluster_name">
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="assume_role_for_pod_identity"
    values={[
        { label: 'assume_role_for_pod_identity', value: 'assume_role_for_pod_identity' }
    ]}
>
<TabItem value="assume_role_for_pod_identity">

The Amazon EKS Auth API and the AssumeRoleForPodIdentity action are only used by the EKS Pod Identity Agent. We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if credentials from an EKS Pod Identity association are available in the pod, the latest versions of the SDKs use them automatically.

```sql
EXEC aws.eks_auth.pod_identities.assume_role_for_pod_identity 
@cluster_name='{{ cluster_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"token": "{{ token }}", 
"eksNodeName": "{{ eksNodeName }}", 
"instanceId": "{{ instanceId }}", 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
</Tabs>
