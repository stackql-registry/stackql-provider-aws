--- 
title: security_token_service_preferences
hide_title: false
hide_table_of_contents: false
keywords:
  - security_token_service_preferences
  - iam
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

Creates, updates, deletes, gets or lists a <code>security_token_service_preferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_token_service_preferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.security_token_service_preferences" /></td></tr>
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
    <td><a href="#set_security_token_service_preferences"><CopyableCode code="set_security_token_service_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GlobalEndpointTokenVersion"><code>GlobalEndpointTokenVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account. By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at https:​//sts.amazonaws.com. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see Security Token Service endpoints and quotas in the Amazon Web Services General Reference. If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see Activating and deactivating STS in an Amazon Web Services Region in the IAM User Guide. To view the current session token version, see the GlobalEndpointTokenVersion entry in the response of the GetAccountSummary operation.</td>
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
<tr id="parameter-GlobalEndpointTokenVersion">
    <td><CopyableCode code="GlobalEndpointTokenVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the global endpoint token. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see Activating and deactivating STS in an Amazon Web Services Region in the IAM User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="set_security_token_service_preferences"
    values={[
        { label: 'set_security_token_service_preferences', value: 'set_security_token_service_preferences' }
    ]}
>
<TabItem value="set_security_token_service_preferences">

Sets the specified version of the global endpoint token as the token version used for the Amazon Web Services account. By default, Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at https://sts.amazonaws.com. Amazon Web Services recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see Security Token Service endpoints and quotas in the Amazon Web Services General Reference. If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in Amazon Web Services Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see Activating and deactivating STS in an Amazon Web Services Region in the IAM User Guide. To view the current session token version, see the GlobalEndpointTokenVersion entry in the response of the GetAccountSummary operation.

```sql
UPDATE aws.iam.security_token_service_preferences
SET 
-- No updatable properties
WHERE 
GlobalEndpointTokenVersion = '{{ GlobalEndpointTokenVersion }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
