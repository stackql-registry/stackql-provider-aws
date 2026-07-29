--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

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
    <td><CopyableCode code="application_account" /></td>
    <td><code>string</code></td>
    <td>The account ID. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the application. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application provider under which the operation will run. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::aws:applicationProvider/&#91;a-zA-Z0-9-/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the application was created in IAM Identity Center. (pattern: &lt;code&gt;(&#91;a-z&#93;+-)&#123;2,3&#125;\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the .</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the identity store that is connected to the instance of IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The application name. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_options" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the options for the portal associated with an application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the application is enabled or disabled. (ENABLED, DISABLED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="application_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID number of the application. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::\d&#123;12&#125;:application/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/apl-&#91;a-zA-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application provider for this application. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso::aws:applicationProvider/&#91;a-zA-Z0-9-/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the application was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the application was created in IAM Identity Center. (pattern: &lt;code&gt;(&#91;a-z&#93;+-)&#123;2,3&#125;\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the identity store that is connected to the instance of IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the instance of IAM Identity Center that is configured with this application. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_options" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the options for the access portal associated with this application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the application in this instance of IAM Identity Center. (ENABLED, DISABLED)</td>
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
    <td><a href="#describe_application"><CopyableCode code="describe_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of an application associated with an instance of IAM Identity Center.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all applications associated with the instance of IAM Identity Center. When listing applications for an organization instance in the management account, member accounts must use the applicationAccount parameter to filter the list to only applications created from that account. When listing applications for an account instance in the same member account, a filter is not required.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-ApplicationProviderArn"><code>ApplicationProviderArn</code></a></td>
    <td></td>
    <td>Creates an OAuth 2.0 customer managed application in IAM Identity Center for the given application provider. This API does not support creating SAML 2.0 customer managed applications or Amazon Web Services managed applications. To learn how to create an Amazon Web Services managed application, see the application user guide. You can create a SAML 2.0 customer managed application in the Amazon Web Services Management Console only. See Setting up customer managed SAML 2.0 applications. For more information on these application types, see Amazon Web Services managed applications.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a></td>
    <td></td>
    <td>Updates application properties.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association with the application. The connected service resource still exists.</td>
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
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

Retrieves the details of an application associated with an instance of IAM Identity Center.

```sql
SELECT
application_account,
application_arn,
application_provider_arn,
created_date,
created_from,
description,
identity_store_arn,
instance_arn,
name,
portal_options,
status
FROM aws.sso_admin.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists all applications associated with the instance of IAM Identity Center. When listing applications for an organization instance in the management account, member accounts must use the applicationAccount parameter to filter the list to only applications created from that account. When listing applications for an account instance in the same member account, a filter is not required.

```sql
SELECT
application_account,
application_arn,
application_provider_arn,
created_date,
created_from,
description,
identity_store_arn,
instance_arn,
name,
portal_options,
status
FROM aws.sso_admin.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an OAuth 2.0 customer managed application in IAM Identity Center for the given application provider. This API does not support creating SAML 2.0 customer managed applications or Amazon Web Services managed applications. To learn how to create an Amazon Web Services managed application, see the application user guide. You can create a SAML 2.0 customer managed application in the Amazon Web Services Management Console only. See Setting up customer managed SAML 2.0 applications. For more information on these application types, see Amazon Web Services managed applications.

```sql
INSERT INTO aws.sso_admin.applications (
InstanceArn,
ApplicationProviderArn,
Name,
Description,
PortalOptions,
Tags,
Status,
ClientToken,
region
)
SELECT 
'{{ InstanceArn }}' /* required */,
'{{ ApplicationProviderArn }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ PortalOptions }}',
'{{ Tags }}',
'{{ Status }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
application_arn,
identity_store_arn,
instance_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
    - name: ApplicationProviderArn
      value: "{{ ApplicationProviderArn }}"
      description: |
        The ARN of the application provider under which the operation will run.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the .
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the .
    - name: PortalOptions
      description: |
        A structure that describes the options for the portal associated with an application.
      value:
        SignInOptions:
          Origin: "{{ Origin }}"
          ApplicationUrl: "{{ ApplicationUrl }}"
        Visibility: "{{ Visibility }}"
    - name: Tags
      description: |
        Specifies tags to be attached to the application.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Status
      value: "{{ Status }}"
      description: |
        Specifies whether the application is enabled or disabled.
      valid_values: ['ENABLED', 'DISABLED']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates application properties.

```sql
UPDATE aws.sso_admin.applications
SET 
ApplicationArn = '{{ ApplicationArn }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Status = '{{ Status }}',
PortalOptions = '{{ PortalOptions }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes the association with the application. The connected service resource still exists.

```sql
DELETE FROM aws.sso_admin.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
