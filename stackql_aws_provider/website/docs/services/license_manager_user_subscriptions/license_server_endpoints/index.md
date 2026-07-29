--- 
title: license_server_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - license_server_endpoints
  - license_manager_user_subscriptions
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

Creates, updates, deletes, gets or lists a <code>license_server_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_server_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_user_subscriptions.license_server_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_license_server_endpoints"
    values={[
        { label: 'list_license_server_endpoints', value: 'list_license_server_endpoints' }
    ]}
>
<TabItem value="list_license_server_endpoints">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when License Manager created the license server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the identity provider that's associated with the RDS license server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="license_server_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the ServerEndpoint resource for the RDS license server. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;/&#91;a-zA-Z0-9-\.&#93;&#123;1,510&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="license_server_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the license server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="license_server_endpoint_provisioning_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the provisioning process for the RDS license server endpoint (PROVISIONING, PROVISIONING_FAILED, PROVISIONED, DELETING, DELETION_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="license_servers" /></td>
    <td><code>array</code></td>
    <td>An array of LicenseServer resources that represent the license servers that are accessed through this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="server_endpoint" /></td>
    <td><code>object</code></td>
    <td>The ServerEndpoint resource contains the network address of the RDS license server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="server_type" /></td>
    <td><code>string</code></td>
    <td>The type of license server. (RDS_SAL)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The message associated with the provisioning status, if there is one.</td>
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
    <td><a href="#list_license_server_endpoints"><CopyableCode code="list_license_server_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the Remote Desktop Services (RDS) License Server endpoints</td>
</tr>
<tr>
    <td><a href="#create_license_server_endpoint"><CopyableCode code="create_license_server_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityProviderArn"><code>IdentityProviderArn</code></a>, <a href="#parameter-LicenseServerSettings"><code>LicenseServerSettings</code></a></td>
    <td></td>
    <td>Creates a network endpoint for the Remote Desktop Services (RDS) license server.</td>
</tr>
<tr>
    <td><a href="#delete_license_server_endpoint"><CopyableCode code="delete_license_server_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a LicenseServerEndpoint resource.</td>
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
    defaultValue="list_license_server_endpoints"
    values={[
        { label: 'list_license_server_endpoints', value: 'list_license_server_endpoints' }
    ]}
>
<TabItem value="list_license_server_endpoints">

List the Remote Desktop Services (RDS) License Server endpoints

```sql
SELECT
creation_time,
identity_provider_arn,
license_server_endpoint_arn,
license_server_endpoint_id,
license_server_endpoint_provisioning_status,
license_servers,
server_endpoint,
server_type,
status_message
FROM aws.license_manager_user_subscriptions.license_server_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_server_endpoint"
    values={[
        { label: 'create_license_server_endpoint', value: 'create_license_server_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_server_endpoint">

Creates a network endpoint for the Remote Desktop Services (RDS) license server.

```sql
INSERT INTO aws.license_manager_user_subscriptions.license_server_endpoints (
IdentityProviderArn,
LicenseServerSettings,
Tags,
region
)
SELECT 
'{{ IdentityProviderArn }}' /* required */,
'{{ LicenseServerSettings }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
identity_provider_arn,
license_server_endpoint_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_server_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_server_endpoints resource.
    - name: IdentityProviderArn
      value: "{{ IdentityProviderArn }}"
    - name: LicenseServerSettings
      description: |
        The settings to configure your license server.
      value:
        ServerType: "{{ ServerType }}"
        ServerSettings:
          RdsSalSettings:
            RdsSalCredentialsProvider:
              SecretsManagerCredentialsProvider:
                SecretId: "{{ SecretId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_server_endpoint"
    values={[
        { label: 'delete_license_server_endpoint', value: 'delete_license_server_endpoint' }
    ]}
>
<TabItem value="delete_license_server_endpoint">

Deletes a LicenseServerEndpoint resource.

```sql
DELETE FROM aws.license_manager_user_subscriptions.license_server_endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
