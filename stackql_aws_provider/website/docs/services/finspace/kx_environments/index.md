--- 
title: kx_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_environments
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_environment"
    values={[
        { label: 'get_kx_environment', value: 'get_kx_environment' },
        { label: 'list_kx_environments', value: 'list_kx_environments' }
    ]}
>
<TabItem value="get_kx_environment">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_ids" /></td>
    <td><code>array</code></td>
    <td>The identifier of the availability zones where subnets for the environment are created.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AWS account that is used to create the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate authority of the kdb environment.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the kdb environment was created in FinSpace.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_dns_configuration" /></td>
    <td><code>array</code></td>
    <td>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_service_account_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the AWS environment infrastructure account. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_status" /></td>
    <td><code>string</code></td>
    <td>The status of DNS configuration. (NONE, UPDATE_REQUESTED, UPDATING, FAILED_UPDATE, SUCCESSFULLY_UPDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the environment. (pattern: &lt;code&gt;^arn:aws:finspace:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:environment/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Specifies the error message that appears if a flow fails. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key ID to encrypt your data in the FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z-0-9-:\/&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the kdb environment. (CREATE_REQUESTED, CREATING, CREATED, DELETE_REQUESTED, DELETING, DELETED, FAILED_CREATION, RETRY_DELETION, FAILED_DELETION, UPDATE_NETWORK_REQUESTED, UPDATING_NETWORK, FAILED_UPDATING_NETWORK, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="tgw_status" /></td>
    <td><code>string</code></td>
    <td>The status of the network configuration. (NONE, UPDATE_REQUESTED, UPDATING, FAILED_UPDATE, SUCCESSFULLY_UPDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_configuration" /></td>
    <td><code>object</code></td>
    <td>The structure of the transit gateway and network configuration that is used to connect the kdb environment to an internal network.</td>
</tr>
<tr>
    <td><CopyableCode code="update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the kdb environment was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_environments">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_ids" /></td>
    <td><code>array</code></td>
    <td>The identifier of the availability zones where subnets for the environment are created.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AWS account in which you create the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate authority:</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the kdb environment was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_dns_configuration" /></td>
    <td><code>array</code></td>
    <td>A list of DNS server name and server IP. This is used to set up Route-53 outbound resolvers.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_service_account_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the AWS environment infrastructure account. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_status" /></td>
    <td><code>string</code></td>
    <td>The status of DNS configuration. (NONE, UPDATE_REQUESTED, UPDATING, FAILED_UPDATE, SUCCESSFULLY_UPDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of your kdb environment. (pattern: &lt;code&gt;^arn:aws:finspace:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:environment/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Specifies the error message that appears if a flow fails. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the KMS key. (pattern: &lt;code&gt;^&#91;a-zA-Z-0-9-:\/&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environment creation. CREATE_REQUESTED – Environment creation has been requested. CREATING – Environment is in the process of being created. FAILED_CREATION – Environment creation has failed. CREATED – Environment is successfully created and is currently active. DELETE REQUESTED – Environment deletion has been requested. DELETING – Environment is in the process of being deleted. RETRY_DELETION – Initial environment deletion failed, system is reattempting delete. DELETED – Environment has been deleted. FAILED_DELETION – Environment deletion has failed. (CREATE_REQUESTED, CREATING, CREATED, DELETE_REQUESTED, DELETING, DELETED, FAILED_CREATION, RETRY_DELETION, FAILED_DELETION, UPDATE_NETWORK_REQUESTED, UPDATING_NETWORK, FAILED_UPDATING_NETWORK, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="tgw_status" /></td>
    <td><code>string</code></td>
    <td>The status of the network configuration. (NONE, UPDATE_REQUESTED, UPDATING, FAILED_UPDATE, SUCCESSFULLY_UPDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the transit gateway and network configuration to connect the kdb environment to an internal network.</td>
</tr>
<tr>
    <td><CopyableCode code="update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the kdb environment was modified in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
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
    <td><a href="#get_kx_environment"><CopyableCode code="get_kx_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all the information for the specified kdb environment.</td>
</tr>
<tr>
    <td><a href="#list_kx_environments"><CopyableCode code="list_kx_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of kdb environments created in an account.</td>
</tr>
<tr>
    <td><a href="#create_kx_environment"><CopyableCode code="create_kx_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-kmsKeyId"><code>kmsKeyId</code></a></td>
    <td></td>
    <td>Creates a managed kdb environment for the account.</td>
</tr>
<tr>
    <td><a href="#update_kx_environment"><CopyableCode code="update_kx_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates information for the given kdb environment.</td>
</tr>
<tr>
    <td><a href="#delete_kx_environment"><CopyableCode code="delete_kx_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it.</td>
</tr>
<tr>
    <td><a href="#update_kx_environment_network"><CopyableCode code="update_kx_environment_network" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers. Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_environment"
    values={[
        { label: 'get_kx_environment', value: 'get_kx_environment' },
        { label: 'list_kx_environments', value: 'list_kx_environments' }
    ]}
>
<TabItem value="get_kx_environment">

Retrieves all the information for the specified kdb environment.

```sql
SELECT
name,
availability_zone_ids,
aws_account_id,
certificate_authority_arn,
creation_timestamp,
custom_dns_configuration,
dedicated_service_account_id,
description,
dns_status,
environment_arn,
environment_id,
error_message,
kms_key_id,
status,
tgw_status,
transit_gateway_configuration,
update_timestamp
FROM aws.finspace.kx_environments
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_environments">

Returns a list of kdb environments created in an account.

```sql
SELECT
name,
availability_zone_ids,
aws_account_id,
certificate_authority_arn,
creation_timestamp,
custom_dns_configuration,
dedicated_service_account_id,
description,
dns_status,
environment_arn,
environment_id,
error_message,
kms_key_id,
status,
tgw_status,
transit_gateway_configuration,
update_timestamp
FROM aws.finspace.kx_environments
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_environment"
    values={[
        { label: 'create_kx_environment', value: 'create_kx_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_environment">

Creates a managed kdb environment for the account.

```sql
INSERT INTO aws.finspace.kx_environments (
name,
description,
kmsKeyId,
tags,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ kmsKeyId }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
name,
creation_timestamp,
description,
environment_arn,
environment_id,
kms_key_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_environments resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kx_environment"
    values={[
        { label: 'update_kx_environment', value: 'update_kx_environment' }
    ]}
>
<TabItem value="update_kx_environment">

Updates information for the given kdb environment.

```sql
UPDATE aws.finspace.kx_environments
SET 
name = '{{ name }}',
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
availability_zone_ids,
aws_account_id,
creation_timestamp,
custom_dns_configuration,
dedicated_service_account_id,
description,
dns_status,
environment_arn,
environment_id,
error_message,
kms_key_id,
status,
tgw_status,
transit_gateway_configuration,
update_timestamp;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_environment"
    values={[
        { label: 'delete_kx_environment', value: 'delete_kx_environment' }
    ]}
>
<TabItem value="delete_kx_environment">

Deletes the kdb environment. This action is irreversible. Deleting a kdb environment will remove all the associated data and any services running in it.

```sql
DELETE FROM aws.finspace.kx_environments
WHERE environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_kx_environment_network"
    values={[
        { label: 'update_kx_environment_network', value: 'update_kx_environment_network' }
    ]}
>
<TabItem value="update_kx_environment_network">

Updates environment network to connect to your internal network by using a transit gateway. This API supports request to create a transit gateway attachment from FinSpace VPC to your transit gateway ID and create a custom Route-53 outbound resolvers. Once you send a request to update a network, you cannot change it again. Network update might require termination of any clusters that are running in the existing network.

```sql
EXEC aws.finspace.kx_environments.update_kx_environment_network 
@environment_id='{{ environment_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"transitGatewayConfiguration": "{{ transitGatewayConfiguration }}", 
"customDNSConfiguration": "{{ customDNSConfiguration }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
