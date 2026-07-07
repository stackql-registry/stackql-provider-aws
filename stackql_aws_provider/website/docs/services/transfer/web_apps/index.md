--- 
title: web_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - web_apps
  - transfer
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

Creates, updates, deletes, gets or lists a <code>web_apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.web_apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_web_app"
    values={[
        { label: 'describe_web_app', value: 'describe_web_app' },
        { label: 'list_web_apps', value: 'list_web_apps' }
    ]}
>
<TabItem value="describe_web_app">

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
    <td><CopyableCode code="AccessEndpoint" /></td>
    <td><code>string</code></td>
    <td>The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the web app. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DescribedEndpointDetails" /></td>
    <td><code>object</code></td>
    <td>The endpoint configuration details for the web app, including VPC settings if the endpoint is hosted within a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="DescribedIdentityProviderDetails" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the details for the identity provider used by the web app.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint hosting the web app. Valid values are PUBLIC for publicly accessible endpoints and VPC for VPC-hosted endpoints that provide network isolation. (PUBLIC, VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for web apps. Tags are metadata attached to web apps for any purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppEndpoint" /></td>
    <td><code>string</code></td>
    <td>The WebAppEndpoint is the unique URL for your Transfer Family web app. This is the value that you use when you configure Origins on CloudFront.</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppEndpointPolicy" /></td>
    <td><code>string</code></td>
    <td>Setting for the type of endpoint policy for the web app. The default value is STANDARD. If your web app was created in an Amazon Web Services GovCloud (US) Region, the value of this parameter can be FIPS, which indicates the web app endpoint is FIPS-compliant. (FIPS, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the web app. (pattern: &lt;code&gt;webapp-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppUnits" /></td>
    <td><code>object</code></td>
    <td>A union that contains the value for number of concurrent connections or the user sessions on your web app.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_web_apps">

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
    <td><CopyableCode code="AccessEndpoint" /></td>
    <td><code>string</code></td>
    <td>The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the web app. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint hosting the web app. Valid values are PUBLIC for publicly accessible endpoints and VPC for VPC-hosted endpoints. (PUBLIC, VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppEndpoint" /></td>
    <td><code>string</code></td>
    <td>The WebAppEndpoint is the unique URL for your Transfer Family web app. This is the value that you use when you configure Origins on CloudFront.</td>
</tr>
<tr>
    <td><CopyableCode code="WebAppId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the web app. (pattern: &lt;code&gt;webapp-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_web_app"><CopyableCode code="describe_web_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the web app that's identified by WebAppId. The response includes endpoint configuration details such as whether the web app is publicly accessible or VPC hosted. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.</td>
</tr>
<tr>
    <td><a href="#list_web_apps"><CopyableCode code="list_web_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all web apps associated with your Amazon Web Services account for your current region. The response includes the endpoint type for each web app, showing whether it is publicly accessible or VPC hosted. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.</td>
</tr>
<tr>
    <td><a href="#create_web_app"><CopyableCode code="create_web_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityProviderDetails"><code>IdentityProviderDetails</code></a></td>
    <td></td>
    <td>Creates a web app based on specified parameters, and returns the ID for the new web app. You can configure the web app to be publicly accessible or hosted within a VPC. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.</td>
</tr>
<tr>
    <td><a href="#update_web_app"><CopyableCode code="update_web_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebAppId"><code>WebAppId</code></a></td>
    <td></td>
    <td>Assigns new properties to a web app. You can modify the access point, identity provider details, endpoint configuration, and the web app units. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.</td>
</tr>
<tr>
    <td><a href="#delete_web_app"><CopyableCode code="delete_web_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified web app.</td>
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
    defaultValue="describe_web_app"
    values={[
        { label: 'describe_web_app', value: 'describe_web_app' },
        { label: 'list_web_apps', value: 'list_web_apps' }
    ]}
>
<TabItem value="describe_web_app">

Describes the web app that's identified by WebAppId. The response includes endpoint configuration details such as whether the web app is publicly accessible or VPC hosted. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.

```sql
SELECT
AccessEndpoint,
Arn,
DescribedEndpointDetails,
DescribedIdentityProviderDetails,
EndpointType,
Tags,
WebAppEndpoint,
WebAppEndpointPolicy,
WebAppId,
WebAppUnits
FROM aws.transfer.web_apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_web_apps">

Lists all web apps associated with your Amazon Web Services account for your current region. The response includes the endpoint type for each web app, showing whether it is publicly accessible or VPC hosted. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.

```sql
SELECT
AccessEndpoint,
Arn,
EndpointType,
WebAppEndpoint,
WebAppId
FROM aws.transfer.web_apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_web_app"
    values={[
        { label: 'create_web_app', value: 'create_web_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_web_app">

Creates a web app based on specified parameters, and returns the ID for the new web app. You can configure the web app to be publicly accessible or hosted within a VPC. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.

```sql
INSERT INTO aws.transfer.web_apps (
IdentityProviderDetails,
AccessEndpoint,
WebAppUnits,
Tags,
WebAppEndpointPolicy,
EndpointDetails,
region
)
SELECT 
'{{ IdentityProviderDetails }}' /* required */,
'{{ AccessEndpoint }}',
'{{ WebAppUnits }}',
'{{ Tags }}',
'{{ WebAppEndpointPolicy }}',
'{{ EndpointDetails }}',
'{{ region }}'
RETURNING
WebAppId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the web_apps resource.
    - name: IdentityProviderDetails
      description: |
        You can provide a structure that contains the details for the identity provider to use with your web app. For more details about this parameter, see Configure your identity provider for Transfer Family web apps.
      value:
        IdentityCenterConfig:
          InstanceArn: "{{ InstanceArn }}"
          Role: "{{ Role }}"
    - name: AccessEndpoint
      value: "{{ AccessEndpoint }}"
      description: |
        The AccessEndpoint is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value. Before you enter a custom URL for this parameter, follow the steps described in Update your access endpoint with a custom URL.
    - name: WebAppUnits
      description: |
        A union that contains the value for number of concurrent connections or the user sessions on your web app.
      value:
        Provisioned: {{ Provisioned }}
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for web apps.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WebAppEndpointPolicy
      value: "{{ WebAppEndpointPolicy }}"
      description: |
        Setting for the type of endpoint policy for the web app. The default value is STANDARD. If you are creating the web app in an Amazon Web Services GovCloud (US) Region, you can set this parameter to FIPS.
      valid_values: ['FIPS', 'STANDARD']
    - name: EndpointDetails
      description: |
        The endpoint configuration for the web app. You can specify whether the web app endpoint is publicly accessible or hosted within a VPC.
      value:
        Vpc:
          SubnetIds:
            - "{{ SubnetIds }}"
          VpcId: "{{ VpcId }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          IpAddressType: "{{ IpAddressType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_web_app"
    values={[
        { label: 'update_web_app', value: 'update_web_app' }
    ]}
>
<TabItem value="update_web_app">

Assigns new properties to a web app. You can modify the access point, identity provider details, endpoint configuration, and the web app units. For more information about using VPC endpoints with Transfer Family, see Create a Transfer Family web app in a VPC.

```sql
UPDATE aws.transfer.web_apps
SET 
WebAppId = '{{ WebAppId }}',
IdentityProviderDetails = '{{ IdentityProviderDetails }}',
AccessEndpoint = '{{ AccessEndpoint }}',
WebAppUnits = '{{ WebAppUnits }}',
EndpointDetails = '{{ EndpointDetails }}'
WHERE 
region = '{{ region }}' --required
AND WebAppId = '{{ WebAppId }}' --required
RETURNING
WebAppId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_app"
    values={[
        { label: 'delete_web_app', value: 'delete_web_app' }
    ]}
>
<TabItem value="delete_web_app">

Deletes the specified web app.

```sql
DELETE FROM aws.transfer.web_apps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
