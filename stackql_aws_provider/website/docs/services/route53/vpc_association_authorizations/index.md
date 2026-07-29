--- 
title: vpc_association_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_association_authorizations
  - route53
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

Creates, updates, deletes, gets or lists a <code>vpc_association_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_association_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.vpc_association_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_vpc_association_authorizations"
    values={[
        { label: 'list_vpc_association_authorizations', value: 'list_vpc_association_authorizations' }
    ]}
>
<TabItem value="list_vpc_association_authorizations">

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
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>(Private hosted zones only) The ID of an Amazon VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_region" /></td>
    <td><code>string</code></td>
    <td>(Private hosted zones only) The region that an Amazon VPC was created in.</td>
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
    <td><a href="#list_vpc_association_authorizations"><CopyableCode code="list_vpc_association_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nexttoken"><code>nexttoken</code></a>, <a href="#parameter-maxresults"><code>maxresults</code></a></td>
    <td>Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more CreateVPCAssociationAuthorization requests. The response includes a VPCs element with a VPC child element for each VPC that can be associated with the hosted zone.</td>
</tr>
<tr>
    <td><a href="#create_vpc_association_authorization"><CopyableCode code="create_vpc_association_authorization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Authorizes the Amazon Web Services account that created a specified VPC to submit an AssociateVPCWithHostedZone request to associate the VPC with a specified hosted zone that was created by a different account. To submit a CreateVPCAssociationAuthorization request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an AssociateVPCWithHostedZone request. If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_association_authorization"><CopyableCode code="delete_vpc_association_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes authorization to submit an AssociateVPCWithHostedZone request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a DeleteVPCAssociationAuthorization request. Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, DeleteVPCAssociationAuthorization won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use DisassociateVPCFromHostedZone.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>When removing authorization to associate a VPC that was created by one Amazon Web Services account with a hosted zone that was created with a different Amazon Web Services account, the ID of the hosted zone.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxresults">
    <td><CopyableCode code="maxresults" /></td>
    <td><code>string</code></td>
    <td>Optional: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for MaxResults, Route 53 returns up to 50 VPCs per page.</td>
</tr>
<tr id="parameter-nexttoken">
    <td><CopyableCode code="nexttoken" /></td>
    <td><code>string</code></td>
    <td>Optional: If a response includes a NextToken element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of NextToken from the response in the nexttoken parameter in another ListVPCAssociationAuthorizations request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_vpc_association_authorizations"
    values={[
        { label: 'list_vpc_association_authorizations', value: 'list_vpc_association_authorizations' }
    ]}
>
<TabItem value="list_vpc_association_authorizations">

Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more CreateVPCAssociationAuthorization requests. The response includes a VPCs element with a VPC child element for each VPC that can be associated with the hosted zone.

```sql
SELECT
vpc_id,
vpc_region
FROM aws.route53.vpc_association_authorizations
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND nexttoken = '{{ nexttoken }}'
AND maxresults = '{{ maxresults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_association_authorization"
    values={[
        { label: 'create_vpc_association_authorization', value: 'create_vpc_association_authorization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_association_authorization">

Authorizes the Amazon Web Services account that created a specified VPC to submit an AssociateVPCWithHostedZone request to associate the VPC with a specified hosted zone that was created by a different account. To submit a CreateVPCAssociationAuthorization request, you must use the account that created the hosted zone. After you authorize the association, use the account that created the VPC to submit an AssociateVPCWithHostedZone request. If you want to associate multiple VPCs that you created by using one account with a hosted zone that you created by using a different account, you must submit one authorization request for each VPC.

```sql
INSERT INTO aws.route53.vpc_association_authorizations (
VPC,
id,
region
)
SELECT 
'{{ VPC }}',
'{{ id }}',
'{{ region }}'
RETURNING
hosted_zone_id,
vpc
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_association_authorizations
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the vpc_association_authorizations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_association_authorizations resource.
    - name: VPC
      description: |
        (Private hosted zones only) A complex type that contains information about an Amazon VPC. If you associate a private hosted zone with an Amazon VPC when you make a CreateHostedZone request, the following parameters are also required.
      value:
        VPCRegion: "{{ VPCRegion }}"
        VPCId: "{{ VPCId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_association_authorization"
    values={[
        { label: 'delete_vpc_association_authorization', value: 'delete_vpc_association_authorization' }
    ]}
>
<TabItem value="delete_vpc_association_authorization">

Removes authorization to submit an AssociateVPCWithHostedZone request to associate a specified VPC with a hosted zone that was created by a different account. You must use the account that created the hosted zone to submit a DeleteVPCAssociationAuthorization request. Sending this request only prevents the Amazon Web Services account that created the VPC from associating the VPC with the Amazon Route 53 hosted zone in the future. If the VPC is already associated with the hosted zone, DeleteVPCAssociationAuthorization won't disassociate the VPC from the hosted zone. If you want to delete an existing association, use DisassociateVPCFromHostedZone.

```sql
DELETE FROM aws.route53.vpc_association_authorizations
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
