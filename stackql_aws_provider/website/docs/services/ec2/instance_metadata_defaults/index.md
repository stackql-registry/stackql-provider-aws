--- 
title: instance_metadata_defaults
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_metadata_defaults
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_metadata_defaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_metadata_defaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_metadata_defaults" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_metadata_defaults"
    values={[
        { label: 'get_instance_metadata_defaults', value: 'get_instance_metadata_defaults' }
    ]}
>
<TabItem value="get_instance_metadata_defaults">

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
    <td><CopyableCode code="http_endpoint" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the IMDS endpoint for an instance is enabled or disabled. When disabled, the instance metadata can't be accessed.</td>
</tr>
<tr>
    <td><CopyableCode code="http_put_response_hop_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of hops that the metadata token can travel.</td>
</tr>
<tr>
    <td><CopyableCode code="http_tokens" /></td>
    <td><code>string</code></td>
    <td>Indicates whether IMDSv2 is required. optional – IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1. required – IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.</td>
</tr>
<tr>
    <td><CopyableCode code="http_tokens_enforced" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to enforce the requirement of IMDSv2 on an instance at the time of launch. When enforcement is enabled, the instance can't launch unless IMDSv2 (HttpTokens) is set to required.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_metadata_tags" /></td>
    <td><code>string</code></td>
    <td>Indicates whether access to instance tags from the instance metadata is enabled or disabled. For more information, see View tags for your EC2 instances using instance metadata in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the IMDS default settings. Possible values include: account - The IMDS default settings are managed by the account. declarative-policy - The IMDS default settings are managed by a declarative policy and can't be modified by the account.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_exception_message" /></td>
    <td><code>string</code></td>
    <td>The customized exception message that is specified in the declarative policy.</td>
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
    <td><a href="#get_instance_metadata_defaults"><CopyableCode code="get_instance_metadata_defaults" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets the default instance metadata service (IMDS) settings that are set at the account level in the specified Amazon Web Services Region. For more information, see Order of precedence for instance metadata options in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_instance_metadata_defaults"><CopyableCode code="modify_instance_metadata_defaults" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HttpTokens"><code>HttpTokens</code></a>, <a href="#parameter-HttpPutResponseHopLimit"><code>HttpPutResponseHopLimit</code></a>, <a href="#parameter-HttpEndpoint"><code>HttpEndpoint</code></a>, <a href="#parameter-InstanceMetadataTags"><code>InstanceMetadataTags</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-HttpTokensEnforced"><code>HttpTokensEnforced</code></a></td>
    <td>Modifies the default instance metadata service (IMDS) settings at the account level in the specified Amazon Web Services Region. To remove a parameter's account-level default setting, specify no-preference. If an account-level setting is cleared with no-preference, then the instance launch considers the other instance metadata settings. For more information, see Order of precedence for instance metadata options in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-HttpEndpoint">
    <td><CopyableCode code="HttpEndpoint" /></td>
    <td><code>string</code></td>
    <td>Enables or disables the IMDS endpoint on an instance. When disabled, the instance metadata can't be accessed.</td>
</tr>
<tr id="parameter-HttpPutResponseHopLimit">
    <td><CopyableCode code="HttpPutResponseHopLimit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of hops that the metadata token can travel. To indicate no preference, specify -1. Possible values: Integers from 1 to 64, and -1 to indicate no preference</td>
</tr>
<tr id="parameter-HttpTokens">
    <td><CopyableCode code="HttpTokens" /></td>
    <td><code>string</code></td>
    <td>Indicates whether IMDSv2 is required. optional – IMDSv2 is optional, which means that you can use either IMDSv2 or IMDSv1. required – IMDSv2 is required, which means that IMDSv1 is disabled, and you must use IMDSv2.</td>
</tr>
<tr id="parameter-HttpTokensEnforced">
    <td><CopyableCode code="HttpTokensEnforced" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to enforce the requirement of IMDSv2 on an instance at the time of launch. When enforcement is enabled, the instance can't launch unless IMDSv2 (HttpTokens) is set to required. For more information, see Enforce IMDSv2 at the account level in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-InstanceMetadataTags">
    <td><CopyableCode code="InstanceMetadataTags" /></td>
    <td><code>string</code></td>
    <td>Enables or disables access to an instance's tags from the instance metadata. For more information, see View tags for your EC2 instances using instance metadata in the Amazon EC2 User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_instance_metadata_defaults"
    values={[
        { label: 'get_instance_metadata_defaults', value: 'get_instance_metadata_defaults' }
    ]}
>
<TabItem value="get_instance_metadata_defaults">

Gets the default instance metadata service (IMDS) settings that are set at the account level in the specified Amazon Web Services Region. For more information, see Order of precedence for instance metadata options in the Amazon EC2 User Guide.

```sql
SELECT
http_endpoint,
http_put_response_hop_limit,
http_tokens,
http_tokens_enforced,
instance_metadata_tags,
managed_by,
managed_exception_message
FROM aws.ec2.instance_metadata_defaults
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_metadata_defaults"
    values={[
        { label: 'modify_instance_metadata_defaults', value: 'modify_instance_metadata_defaults' }
    ]}
>
<TabItem value="modify_instance_metadata_defaults">

Modifies the default instance metadata service (IMDS) settings at the account level in the specified Amazon Web Services Region. To remove a parameter's account-level default setting, specify no-preference. If an account-level setting is cleared with no-preference, then the instance launch considers the other instance metadata settings. For more information, see Order of precedence for instance metadata options in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_metadata_defaults
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND HttpTokens = '{{ HttpTokens}}'
AND HttpPutResponseHopLimit = '{{ HttpPutResponseHopLimit}}'
AND HttpEndpoint = '{{ HttpEndpoint}}'
AND InstanceMetadataTags = '{{ InstanceMetadataTags}}'
AND DryRun = {{ DryRun}}
AND HttpTokensEnforced = '{{ HttpTokensEnforced}}'
RETURNING
return;
```
</TabItem>
</Tabs>
