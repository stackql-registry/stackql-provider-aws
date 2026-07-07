--- 
title: custom_key_stores
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_key_stores
  - kms
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

Creates, updates, deletes, gets or lists a <code>custom_key_stores</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_key_stores" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.custom_key_stores" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_key_stores"
    values={[
        { label: 'describe_custom_key_stores', value: 'describe_custom_key_stores' }
    ]}
>
<TabItem value="describe_custom_key_stores">

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
    <td><CopyableCode code="CloudHsmClusterId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the CloudHSM cluster that is associated with an CloudHSM key store. This field appears only when the CustomKeyStoreType is AWS_CLOUDHSM. (pattern: &lt;code&gt;cluster-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionErrorCode" /></td>
    <td><code>string</code></td>
    <td>Describes the connection error. This field appears in the response only when the ConnectionState is FAILED. Many failures can be resolved by updating the properties of the custom key store. To update a custom key store, disconnect it (DisconnectCustomKeyStore), correct the errors (UpdateCustomKeyStore), and try to connect again (ConnectCustomKeyStore). For additional help resolving these errors, see How to Fix a Connection Failure in Key Management Service Developer Guide. All custom key stores: INTERNAL_ERROR — KMS could not complete the request due to an internal error. Retry the request. For ConnectCustomKeyStore requests, disconnect the custom key store before trying to connect again. NETWORK_ERRORS — Network errors are preventing KMS from connecting the custom key store to its backing key store. CloudHSM key stores: CLUSTER_NOT_FOUND — KMS cannot find the CloudHSM cluster with the specified cluster ID. INSUFFICIENT_CLOUDHSM_HSMS — The associated CloudHSM cluster does not contain any active HSMs. To connect a custom key store to its CloudHSM cluster, the cluster must contain at least one active HSM. INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET — At least one private subnet associated with the CloudHSM cluster doesn't have any available IP addresses. A CloudHSM key store connection requires one free IP address in each of the associated private subnets, although two are preferable. For details, see How to Fix a Connection Failure in the Key Management Service Developer Guide. INVALID_CREDENTIALS — The KeyStorePassword for the custom key store doesn't match the current password of the kmsuser crypto user in the CloudHSM cluster. Before you can connect your custom key store to its CloudHSM cluster, you must change the kmsuser account password and update the KeyStorePassword value for the custom key store. SUBNET_NOT_FOUND — A subnet in the CloudHSM cluster configuration was deleted. If KMS cannot find all of the subnets in the cluster configuration, attempts to connect the custom key store to the CloudHSM cluster fail. To fix this error, create a cluster from a recent backup and associate it with your custom key store. (This process creates a new cluster configuration with a VPC and private subnets.) For details, see How to Fix a Connection Failure in the Key Management Service Developer Guide. USER_LOCKED_OUT — The kmsuser CU account is locked out of the associated CloudHSM cluster due to too many failed password attempts. Before you can connect your custom key store to its CloudHSM cluster, you must change the kmsuser account password and update the key store password value for the custom key store. USER_LOGGED_IN — The kmsuser CU account is logged into the associated CloudHSM cluster. This prevents KMS from rotating the kmsuser account password and logging into the cluster. Before you can connect your custom key store to its CloudHSM cluster, you must log the kmsuser CU out of the cluster. If you changed the kmsuser password to log into the cluster, you must also and update the key store password value for the custom key store. For help, see How to Log Out and Reconnect in the Key Management Service Developer Guide. USER_NOT_FOUND — KMS cannot find a kmsuser CU account in the associated CloudHSM cluster. Before you can connect your custom key store to its CloudHSM cluster, you must create a kmsuser CU account in the cluster, and then update the key store password value for the custom key store. External key stores: INVALID_CREDENTIALS — One or both of the XksProxyAuthenticationCredential values is not valid on the specified external key store proxy. XKS_PROXY_ACCESS_DENIED — KMS requests are denied access to the external key store proxy. If the external key store proxy has authorization rules, verify that they permit KMS to communicate with the proxy on your behalf. XKS_PROXY_INVALID_CONFIGURATION — A configuration error is preventing the external key store from connecting to its proxy. Verify the value of the XksProxyUriPath. XKS_PROXY_INVALID_RESPONSE — KMS cannot interpret the response from the external key store proxy. If you see this connection error code repeatedly, notify your external key store proxy vendor. XKS_PROXY_INVALID_TLS_CONFIGURATION — KMS cannot connect to the external key store proxy because the TLS configuration is invalid. Verify that the XKS proxy supports TLS 1.2 or 1.3. Also, verify that the TLS certificate is not expired, and that it matches the hostname in the XksProxyUriEndpoint value, and that it is signed by a certificate authority included in the Trusted Certificate Authorities list. XKS_PROXY_NOT_REACHABLE — KMS can't communicate with your external key store proxy. Verify that the XksProxyUriEndpoint and XksProxyUriPath are correct. Use the tools for your external key store proxy to verify that the proxy is active and available on its network. Also, verify that your external key manager instances are operating properly. Connection attempts fail with this connection error code if the proxy reports that all external key manager instances are unavailable. XKS_PROXY_TIMED_OUT — KMS can connect to the external key store proxy, but the proxy does not respond to KMS in the time allotted. If you see this connection error code repeatedly, notify your external key store proxy vendor. XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION — The Amazon VPC endpoint service configuration doesn't conform to the requirements for an KMS external key store. The VPC endpoint service must be an endpoint service for interface endpoints in the caller's Amazon Web Services account. It must have a network load balancer (NLB) connected to at least two subnets, each in a different Availability Zone. The Allow principals list must include the KMS service principal for the Region, cks.kms.<code>&lt;region&gt;</code>.amazonaws.com, such as cks.kms.us-east-1.amazonaws.com. It must not require acceptance of connection requests. It must have a private DNS name. The private DNS name for an external key store with VPC_ENDPOINT_SERVICE connectivity must be unique in its Amazon Web Services Region. The domain of the private DNS name must have a verification status of verified. The TLS certificate specifies the private DNS hostname at which the endpoint is reachable. XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND — KMS can't find the VPC endpoint service that it uses to communicate with the external key store proxy. Verify that the XksProxyVpcEndpointServiceName is correct and the KMS service principal has service consumer permissions on the Amazon VPC endpoint service. (INVALID_CREDENTIALS, CLUSTER_NOT_FOUND, NETWORK_ERRORS, INTERNAL_ERROR, INSUFFICIENT_CLOUDHSM_HSMS, USER_LOCKED_OUT, USER_NOT_FOUND, USER_LOGGED_IN, SUBNET_NOT_FOUND, INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET, XKS_PROXY_ACCESS_DENIED, XKS_PROXY_NOT_REACHABLE, XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND, XKS_PROXY_INVALID_RESPONSE, XKS_PROXY_INVALID_CONFIGURATION, XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION, XKS_PROXY_TIMED_OUT, XKS_PROXY_INVALID_TLS_CONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionState" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the custom key store is connected to its backing key store. For an CloudHSM key store, the ConnectionState indicates whether it is connected to its CloudHSM cluster. For an external key store, the ConnectionState indicates whether it is connected to the external key store proxy that communicates with your external key manager. You can create and use KMS keys in your custom key stores only when its ConnectionState is CONNECTED. The ConnectionState value is DISCONNECTED only if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If the value is CONNECTED but you are having trouble using the custom key store, make sure that the backing key store is reachable and active. For an CloudHSM key store, verify that its associated CloudHSM cluster is active and contains at least one active HSM. For an external key store, verify that the external key store proxy and external key manager are connected and enabled. A value of FAILED indicates that an attempt to connect was unsuccessful. The ConnectionErrorCode field in the response indicates the cause of the failure. For help resolving a connection failure, see Troubleshooting a custom key store in the Key Management Service Developer Guide. (CONNECTED, CONNECTING, FAILED, DISCONNECTED, DISCONNECTING)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the custom key store was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomKeyStoreId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the custom key store.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomKeyStoreName" /></td>
    <td><code>string</code></td>
    <td>The user-specified friendly name for the custom key store.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomKeyStoreType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of the custom key store. AWS_CLOUDHSM indicates a custom key store backed by an CloudHSM cluster. EXTERNAL_KEY_STORE indicates a custom key store backed by an external key store proxy and external key manager outside of Amazon Web Services. (AWS_CLOUDHSM, EXTERNAL_KEY_STORE)</td>
</tr>
<tr>
    <td><CopyableCode code="TrustAnchorCertificate" /></td>
    <td><code>string</code></td>
    <td>The trust anchor certificate of the CloudHSM cluster associated with an CloudHSM key store. When you initialize the cluster, you create this certificate and save it in the customerCA.crt file. This field appears only when the CustomKeyStoreType is AWS_CLOUDHSM.</td>
</tr>
<tr>
    <td><CopyableCode code="XksProxyConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for the external key store proxy (XKS proxy). The external key store proxy translates KMS requests into a format that your external key manager can understand. The proxy configuration includes connection information that KMS requires. This field appears only when the CustomKeyStoreType is EXTERNAL_KEY_STORE.</td>
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
    <td><a href="#describe_custom_key_stores"><CopyableCode code="describe_custom_key_stores" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about custom key stores in the account and Region. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the CustomKeyStoreName or CustomKeyStoreId parameter (but not both). To determine whether the custom key store is connected to its CloudHSM cluster or external key store proxy, use the ConnectionState element in the response. If an attempt to connect the custom key store failed, the ConnectionState value is FAILED and the ConnectionErrorCode element in the response indicates the cause of the failure. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. Custom key stores have a DISCONNECTED connection state if the key store has never been connected or you used the DisconnectCustomKeyStore operation to disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store connection state is CONNECTED but you are having trouble using it, verify that the backing store is active and available. For an CloudHSM key store, verify that the associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any. For an external key store, verify that the external key store proxy and its associated external key manager are reachable and enabled. For help repairing your CloudHSM key store, see the Troubleshooting CloudHSM key stores. For help repairing your external key store, see the Troubleshooting external key stores. Both topics are in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DescribeCustomKeyStores (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#create_custom_key_store"><CopyableCode code="create_custom_key_store" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomKeyStoreName"><code>CustomKeyStoreName</code></a></td>
    <td></td>
    <td>Creates a custom key store backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key store proxy and external key manager outside of Amazon Web Services. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see Assemble the prerequisites (for CloudHSM key stores) or Assemble the prerequisites (for external key stores) in the Key Management Service Developer Guide. To create a custom key store, use the following parameters. To create an CloudHSM key store, specify the CustomKeyStoreName, CloudHsmClusterId, KeyStorePassword, and TrustAnchorCertificate. The CustomKeyStoreType parameter is optional for CloudHSM key stores. If you include it, set it to the default value, AWS_CLOUDHSM. For help with failures, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide. To create an external key store, specify the CustomKeyStoreName and a CustomKeyStoreType of EXTERNAL_KEY_STORE. Also, specify values for XksProxyConnectivity, XksProxyAuthenticationCredential, XksProxyUriEndpoint, and XksProxyUriPath. If your XksProxyConnectivity value is VPC_ENDPOINT_SERVICE, specify the XksProxyVpcEndpointServiceName parameter. For help with failures, see Troubleshooting an external key store in the Key Management Service Developer Guide. For external key stores: Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation. When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the CreateCustomKeyStore operation. However, you can use the values in the file to help you determine the correct values for the CreateCustomKeyStore parameters. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:CreateCustomKeyStore (IAM policy). Related operations: ConnectCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#update_custom_key_store"><CopyableCode code="update_custom_key_store" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomKeyStoreId"><code>CustomKeyStoreId</code></a></td>
    <td></td>
    <td>Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store. Use the required CustomKeyStoreId parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the DescribeCustomKeyStores operation. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable. For external key stores: Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation. When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the UpdateCustomKeyStore operation. However, you can use the file to help you determine the correct values for the UpdateCustomKeyStore parameters. For an CloudHSM key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), to tell KMS about a change to the kmsuser crypto user password (KeyStorePassword), or to associate the custom key store with a different, but related, CloudHSM cluster (CloudHsmClusterId). To update most properties of an CloudHSM key store, the ConnectionState of the CloudHSM key store must be DISCONNECTED. However, you can update the CustomKeyStoreName of an AWS CloudHSM key store when it is in the CONNECTED or DISCONNECTED state. For an external key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), or to tell KMS about a change to the external key store proxy authentication credentials (XksProxyAuthenticationCredential), connection method (XksProxyConnectivity), external proxy endpoint (XksProxyUriEndpoint) and path (XksProxyUriPath). For external key stores with an XksProxyConnectivity of VPC_ENDPOINT_SERVICE, you can also update the Amazon VPC endpoint service name (XksProxyVpcEndpointServiceName). To update most properties of an external key store, the ConnectionState of the external key store must be DISCONNECTED. However, you can update the CustomKeyStoreName, XksProxyAuthenticationCredential, and XksProxyUriPath of an external key store when it is in the CONNECTED or DISCONNECTED state. If your update requires a DISCONNECTED state, before using UpdateCustomKeyStore, use the DisconnectCustomKeyStore operation to disconnect the custom key store. After the UpdateCustomKeyStore operation completes, use the ConnectCustomKeyStore to reconnect the custom key store. To find the ConnectionState of the custom key store, use the DescribeCustomKeyStores operation. Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the XksProxyUriPath value, verify that the external key store proxy is reachable at the new path. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:UpdateCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#delete_custom_key_store"><CopyableCode code="delete_custom_key_store" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom key store. This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The custom key store that you delete cannot contain any KMS keys. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any cryptographic operations. Then, use ScheduleKeyDeletion to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use DisconnectCustomKeyStore to disconnect the key store from KMS. Then, you can delete the custom key store. For keys in an CloudHSM key store, the ScheduleKeyDeletion operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools. Instead of deleting the custom key store, consider using the DisconnectCustomKeyStore operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DeleteCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#connect_custom_key_store"><CopyableCode code="connect_custom_key_store" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomKeyStoreId"><code>CustomKeyStoreId</code></a></td>
    <td></td>
    <td>Connects or reconnects a custom key store to its backing key store. For an CloudHSM key store, ConnectCustomKeyStore connects the key store to its associated CloudHSM cluster. For an external key store, ConnectCustomKeyStore connects the key store to the external key store proxy that communicates with your external key manager. The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time. The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. CloudHSM key store During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the kmsuser CU, and rotates its password. To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. Also, the kmsuser crypto user (CU) must not be logged into the cluster. This prevents KMS from using this account to log in. If you are having trouble connecting or disconnecting a CloudHSM key store, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide. External key store When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy. When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service. To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations. If you are having trouble connecting or disconnecting an external key store, see Troubleshooting an external key store in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:ConnectCustomKeyStore (IAM policy) Related operations CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#disconnect_custom_key_store"><CopyableCode code="disconnect_custom_key_store" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomKeyStoreId"><code>CustomKeyStoreId</code></a></td>
    <td></td>
    <td>Disconnects the custom key store from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time. While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in cryptographic operations will fail. This action can prevent users from storing and accessing sensitive data. When you disconnect a custom key store, its ConnectionState changes to Disconnected. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DisconnectCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="describe_custom_key_stores"
    values={[
        { label: 'describe_custom_key_stores', value: 'describe_custom_key_stores' }
    ]}
>
<TabItem value="describe_custom_key_stores">

Gets information about custom key stores in the account and Region. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. By default, this operation returns information about all custom key stores in the account and Region. To get only information about a particular custom key store, use either the CustomKeyStoreName or CustomKeyStoreId parameter (but not both). To determine whether the custom key store is connected to its CloudHSM cluster or external key store proxy, use the ConnectionState element in the response. If an attempt to connect the custom key store failed, the ConnectionState value is FAILED and the ConnectionErrorCode element in the response indicates the cause of the failure. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. Custom key stores have a DISCONNECTED connection state if the key store has never been connected or you used the DisconnectCustomKeyStore operation to disconnect it. Otherwise, the connection state is CONNECTED. If your custom key store connection state is CONNECTED but you are having trouble using it, verify that the backing store is active and available. For an CloudHSM key store, verify that the associated CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any. For an external key store, verify that the external key store proxy and its associated external key manager are reachable and enabled. For help repairing your CloudHSM key store, see the Troubleshooting CloudHSM key stores. For help repairing your external key store, see the Troubleshooting external key stores. Both topics are in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DescribeCustomKeyStores (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
CloudHsmClusterId,
ConnectionErrorCode,
ConnectionState,
CreationDate,
CustomKeyStoreId,
CustomKeyStoreName,
CustomKeyStoreType,
TrustAnchorCertificate,
XksProxyConfiguration
FROM aws.kms.custom_key_stores
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_key_store"
    values={[
        { label: 'create_custom_key_store', value: 'create_custom_key_store' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_key_store">

Creates a custom key store backed by a key store that you own and manage. When you use a KMS key in a custom key store for a cryptographic operation, the cryptographic operation is actually performed in your key store using your keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key store proxy and external key manager outside of Amazon Web Services. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. Before you create the custom key store, the required elements must be in place and operational. We recommend that you use the test tools that KMS provides to verify the configuration your external key store proxy. For details about the required elements and verification tests, see Assemble the prerequisites (for CloudHSM key stores) or Assemble the prerequisites (for external key stores) in the Key Management Service Developer Guide. To create a custom key store, use the following parameters. To create an CloudHSM key store, specify the CustomKeyStoreName, CloudHsmClusterId, KeyStorePassword, and TrustAnchorCertificate. The CustomKeyStoreType parameter is optional for CloudHSM key stores. If you include it, set it to the default value, AWS_CLOUDHSM. For help with failures, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide. To create an external key store, specify the CustomKeyStoreName and a CustomKeyStoreType of EXTERNAL_KEY_STORE. Also, specify values for XksProxyConnectivity, XksProxyAuthenticationCredential, XksProxyUriEndpoint, and XksProxyUriPath. If your XksProxyConnectivity value is VPC_ENDPOINT_SERVICE, specify the XksProxyVpcEndpointServiceName parameter. For help with failures, see Troubleshooting an external key store in the Key Management Service Developer Guide. For external key stores: Some external key managers provide a simpler method for creating an external key store. For details, see your external key manager documentation. When creating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot use a proxy configuration with the CreateCustomKeyStore operation. However, you can use the values in the file to help you determine the correct values for the CreateCustomKeyStore parameters. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect a new CloudHSM key store to its CloudHSM cluster, or to connect a new external key store to the external key store proxy for your external key manager. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:CreateCustomKeyStore (IAM policy). Related operations: ConnectCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
INSERT INTO aws.kms.custom_key_stores (
CustomKeyStoreName,
CloudHsmClusterId,
TrustAnchorCertificate,
KeyStorePassword,
CustomKeyStoreType,
XksProxyUriEndpoint,
XksProxyUriPath,
XksProxyVpcEndpointServiceName,
XksProxyVpcEndpointServiceOwner,
XksProxyAuthenticationCredential,
XksProxyConnectivity,
region
)
SELECT 
'{{ CustomKeyStoreName }}' /* required */,
'{{ CloudHsmClusterId }}',
'{{ TrustAnchorCertificate }}',
'{{ KeyStorePassword }}',
'{{ CustomKeyStoreType }}',
'{{ XksProxyUriEndpoint }}',
'{{ XksProxyUriPath }}',
'{{ XksProxyVpcEndpointServiceName }}',
'{{ XksProxyVpcEndpointServiceOwner }}',
'{{ XksProxyAuthenticationCredential }}',
'{{ XksProxyConnectivity }}',
'{{ region }}'
RETURNING
CustomKeyStoreId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_key_stores
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_key_stores resource.
    - name: CustomKeyStoreName
      value: "{{ CustomKeyStoreName }}"
      description: |
        Specifies a friendly name for the custom key store. The name must be unique in your Amazon Web Services account and Region. This parameter is required for all custom key stores. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
    - name: CloudHsmClusterId
      value: "{{ CloudHsmClusterId }}"
      description: |
        Identifies the CloudHSM cluster for an CloudHSM key store. This parameter is required for custom key stores with CustomKeyStoreType of AWS_CLOUDHSM. Enter the cluster ID of any active CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID, use the DescribeClusters operation.
    - name: TrustAnchorCertificate
      value: "{{ TrustAnchorCertificate }}"
      description: |
        Specifies the certificate for an CloudHSM key store. This parameter is required for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. Enter the content of the trust anchor certificate for the CloudHSM cluster. This is the content of the customerCA.crt file that you created when you initialized the cluster.
    - name: KeyStorePassword
      value: "{{ KeyStorePassword }}"
      description: |
        Specifies the kmsuser password for an CloudHSM key store. This parameter is required for custom key stores with a CustomKeyStoreType of AWS_CLOUDHSM. Enter the password of the kmsuser crypto user (CU) account in the specified CloudHSM cluster. KMS logs into the cluster as this user to manage key material on your behalf. The password must be a string of 7 to 32 characters. Its value is case sensitive. This parameter tells KMS the kmsuser account password; it does not change the password in the CloudHSM cluster.
    - name: CustomKeyStoreType
      value: "{{ CustomKeyStoreType }}"
      description: |
        Specifies the type of custom key store. The default value is AWS_CLOUDHSM. For a custom key store backed by an CloudHSM cluster, omit the parameter or enter AWS_CLOUDHSM. For a custom key store backed by an external key manager outside of Amazon Web Services, enter EXTERNAL_KEY_STORE. You cannot change this property after the key store is created.
      valid_values: ['AWS_CLOUDHSM', 'EXTERNAL_KEY_STORE']
    - name: XksProxyUriEndpoint
      value: "{{ XksProxyUriEndpoint }}"
      description: |
        Specifies the endpoint that KMS uses to send requests to the external key store proxy (XKS proxy). This parameter is required for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The protocol must be HTTPS. KMS communicates on port 443. Do not specify the port in the XksProxyUriEndpoint value. For external key stores with XksProxyConnectivity value of VPC_ENDPOINT_SERVICE, specify https:// followed by the private DNS name of the VPC endpoint service. For external key stores with PUBLIC_ENDPOINT connectivity, this endpoint must be reachable before you create the custom key store. KMS connects to the external key store proxy while creating the custom key store. For external key stores with VPC_ENDPOINT_SERVICE connectivity, KMS connects when you call the ConnectCustomKeyStore operation. The value of this parameter must begin with https://. The remainder can contain upper and lower case letters (A-Z and a-z), numbers (0-9), dots (.), and hyphens (-). Additional slashes (/ and \) are not permitted. Uniqueness requirements: The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region. An external key store with PUBLIC_ENDPOINT connectivity cannot use the same XksProxyUriEndpoint value as an external key store with VPC_ENDPOINT_SERVICE connectivity in this Amazon Web Services Region. Each external key store with VPC_ENDPOINT_SERVICE connectivity must have its own private DNS name. The XksProxyUriEndpoint value for external key stores with VPC_ENDPOINT_SERVICE connectivity (private DNS name) must be unique in the Amazon Web Services account and Region.
    - name: XksProxyUriPath
      value: "{{ XksProxyUriPath }}"
      description: |
        Specifies the base path to the proxy APIs for this external key store. To find this value, see the documentation for your external key store proxy. This parameter is required for all custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The value must start with / and must end with /kms/xks/v1 where v1 represents the version of the KMS external key store proxy API. This path can include an optional prefix between the required elements such as /prefix/kms/xks/v1. Uniqueness requirements: The combined XksProxyUriEndpoint and XksProxyUriPath values must be unique in the Amazon Web Services account and Region.
    - name: XksProxyVpcEndpointServiceName
      value: "{{ XksProxyVpcEndpointServiceName }}"
      description: |
        Specifies the name of the Amazon VPC endpoint service for interface endpoints that is used to communicate with your external key store proxy (XKS proxy). This parameter is required when the value of CustomKeyStoreType is EXTERNAL_KEY_STORE and the value of XksProxyConnectivity is VPC_ENDPOINT_SERVICE. The Amazon VPC endpoint service must fulfill all requirements for use with an external key store. Uniqueness requirements: External key stores with VPC_ENDPOINT_SERVICE connectivity can share an Amazon VPC, but each external key store must have its own VPC endpoint service and private DNS name.
    - name: XksProxyVpcEndpointServiceOwner
      value: "{{ XksProxyVpcEndpointServiceOwner }}"
      description: |
        Specifies the Amazon Web Services account ID that owns the Amazon VPC service endpoint for the interface that is used to communicate with your external key store proxy (XKS proxy). This parameter is optional. If not provided, the Amazon Web Services account ID calling the action will be used.
    - name: XksProxyAuthenticationCredential
      description: |
        Specifies an authentication credential for the external key store proxy (XKS proxy). This parameter is required for all custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. The XksProxyAuthenticationCredential has two required elements: RawSecretAccessKey, a secret key, and AccessKeyId, a unique identifier for the RawSecretAccessKey. For character requirements, see XksProxyAuthenticationCredentialType. KMS uses this authentication credential to sign requests to the external key store proxy on your behalf. This credential is unrelated to Identity and Access Management (IAM) and Amazon Web Services credentials. This parameter doesn't set or change the authentication credentials on the XKS proxy. It just tells KMS the credential that you established on your external key store proxy. If you rotate your proxy authentication credential, use the UpdateCustomKeyStore operation to provide the new credential to KMS.
      value:
        AccessKeyId: "{{ AccessKeyId }}"
        RawSecretAccessKey: "{{ RawSecretAccessKey }}"
    - name: XksProxyConnectivity
      value: "{{ XksProxyConnectivity }}"
      description: |
        Indicates how KMS communicates with the external key store proxy. This parameter is required for custom key stores with a CustomKeyStoreType of EXTERNAL_KEY_STORE. If the external key store proxy uses a public endpoint, specify PUBLIC_ENDPOINT. If the external key store proxy uses a Amazon VPC endpoint service for communication with KMS, specify VPC_ENDPOINT_SERVICE. For help making this choice, see Choosing a connectivity option in the Key Management Service Developer Guide. An Amazon VPC endpoint service keeps your communication with KMS in a private address space entirely within Amazon Web Services, but it requires more configuration, including establishing a Amazon VPC with multiple subnets, a VPC endpoint service, a network load balancer, and a verified private DNS name. A public endpoint is simpler to set up, but it might be slower and might not fulfill your security requirements. You might consider testing with a public endpoint, and then establishing a VPC endpoint service for production tasks. Note that this choice does not determine the location of the external key store proxy. Even if you choose a VPC endpoint service, the proxy can be hosted within the VPC or outside of Amazon Web Services such as in your corporate data center.
      valid_values: ['PUBLIC_ENDPOINT', 'VPC_ENDPOINT_SERVICE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_custom_key_store"
    values={[
        { label: 'update_custom_key_store', value: 'update_custom_key_store' }
    ]}
>
<TabItem value="update_custom_key_store">

Changes the properties of a custom key store. You can use this operation to change the properties of an CloudHSM key store or an external key store. Use the required CustomKeyStoreId parameter to identify the custom key store. Use the remaining optional parameters to change its properties. This operation does not return any property values. To verify the updated property values, use the DescribeCustomKeyStores operation. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. When updating the properties of an external key store, verify that the updated settings connect your key store, via the external key store proxy, to the same external key manager as the previous settings, or to a backup or snapshot of the external key manager with the same cryptographic keys. If the updated connection settings fail, you can fix them and retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is unrecoverable. For external key stores: Some external key managers provide a simpler method for updating an external key store. For details, see your external key manager documentation. When updating an external key store in the KMS console, you can upload a JSON-based proxy configuration file with the desired values. You cannot upload the proxy configuration file to the UpdateCustomKeyStore operation. However, you can use the file to help you determine the correct values for the UpdateCustomKeyStore parameters. For an CloudHSM key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), to tell KMS about a change to the kmsuser crypto user password (KeyStorePassword), or to associate the custom key store with a different, but related, CloudHSM cluster (CloudHsmClusterId). To update most properties of an CloudHSM key store, the ConnectionState of the CloudHSM key store must be DISCONNECTED. However, you can update the CustomKeyStoreName of an AWS CloudHSM key store when it is in the CONNECTED or DISCONNECTED state. For an external key store, you can use this operation to change the custom key store friendly name (NewCustomKeyStoreName), or to tell KMS about a change to the external key store proxy authentication credentials (XksProxyAuthenticationCredential), connection method (XksProxyConnectivity), external proxy endpoint (XksProxyUriEndpoint) and path (XksProxyUriPath). For external key stores with an XksProxyConnectivity of VPC_ENDPOINT_SERVICE, you can also update the Amazon VPC endpoint service name (XksProxyVpcEndpointServiceName). To update most properties of an external key store, the ConnectionState of the external key store must be DISCONNECTED. However, you can update the CustomKeyStoreName, XksProxyAuthenticationCredential, and XksProxyUriPath of an external key store when it is in the CONNECTED or DISCONNECTED state. If your update requires a DISCONNECTED state, before using UpdateCustomKeyStore, use the DisconnectCustomKeyStore operation to disconnect the custom key store. After the UpdateCustomKeyStore operation completes, use the ConnectCustomKeyStore to reconnect the custom key store. To find the ConnectionState of the custom key store, use the DescribeCustomKeyStores operation. Before updating the custom key store, verify that the new values allow KMS to connect the custom key store to its backing key store. For example, before you change the XksProxyUriPath value, verify that the external key store proxy is reachable at the new path. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:UpdateCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.custom_key_stores
SET 
CustomKeyStoreId = '{{ CustomKeyStoreId }}',
NewCustomKeyStoreName = '{{ NewCustomKeyStoreName }}',
KeyStorePassword = '{{ KeyStorePassword }}',
CloudHsmClusterId = '{{ CloudHsmClusterId }}',
XksProxyUriEndpoint = '{{ XksProxyUriEndpoint }}',
XksProxyUriPath = '{{ XksProxyUriPath }}',
XksProxyVpcEndpointServiceName = '{{ XksProxyVpcEndpointServiceName }}',
XksProxyVpcEndpointServiceOwner = '{{ XksProxyVpcEndpointServiceOwner }}',
XksProxyAuthenticationCredential = '{{ XksProxyAuthenticationCredential }}',
XksProxyConnectivity = '{{ XksProxyConnectivity }}'
WHERE 
region = '{{ region }}' --required
AND CustomKeyStoreId = '{{ CustomKeyStoreId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_key_store"
    values={[
        { label: 'delete_custom_key_store', value: 'delete_custom_key_store' }
    ]}
>
<TabItem value="delete_custom_key_store">

Deletes a custom key store. This operation does not affect any backing elements of the custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key store, or affect any users or keys in the cluster. For an external key store, it does not affect the external key store proxy, external key manager, or any external keys. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The custom key store that you delete cannot contain any KMS keys. Before deleting the key store, verify that you will never need to use any of the KMS keys in the key store for any cryptographic operations. Then, use ScheduleKeyDeletion to delete the KMS keys from the key store. After the required waiting period expires and all KMS keys are deleted from the custom key store, use DisconnectCustomKeyStore to disconnect the key store from KMS. Then, you can delete the custom key store. For keys in an CloudHSM key store, the ScheduleKeyDeletion operation makes a best effort to delete the key material from the associated cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. KMS never creates, manages, or deletes cryptographic keys in the external key manager associated with an external key store. You must manage them using your external key manager tools. Instead of deleting the custom key store, consider using the DisconnectCustomKeyStore operation to disconnect the custom key store from its backing key store. While the key store is disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected custom key store at any time. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DeleteCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
DELETE FROM aws.kms.custom_key_stores
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="connect_custom_key_store"
    values={[
        { label: 'connect_custom_key_store', value: 'connect_custom_key_store' },
        { label: 'disconnect_custom_key_store', value: 'disconnect_custom_key_store' }
    ]}
>
<TabItem value="connect_custom_key_store">

Connects or reconnects a custom key store to its backing key store. For an CloudHSM key store, ConnectCustomKeyStore connects the key store to its associated CloudHSM cluster. For an external key store, ConnectCustomKeyStore connects the key store to the external key store proxy that communicates with your external key manager. The custom key store must be connected before you can create KMS keys in the key store or use the KMS keys it contains. You can disconnect and reconnect a custom key store at any time. The connection process for a custom key store can take an extended amount of time to complete. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. CloudHSM key store During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the CloudHSM client as the kmsuser CU, and rotates its password. To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. Also, the kmsuser crypto user (CU) must not be logged into the cluster. This prevents KMS from using this account to log in. If you are having trouble connecting or disconnecting a CloudHSM key store, see Troubleshooting an CloudHSM key store in the Key Management Service Developer Guide. External key store When you connect an external key store that uses public endpoint connectivity, KMS tests its ability to communicate with your external key manager by sending a request via the external key store proxy. When you connect to an external key store that uses VPC endpoint service connectivity, KMS establishes the networking elements that it needs to communicate with your external key manager via the external key store proxy. This includes creating an interface endpoint to the VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint service. To connect an external key store, KMS must be able to connect to the external key store proxy, the external key store proxy must be able to communicate with your external key manager, and the external key manager must be available for cryptographic operations. If you are having trouble connecting or disconnecting an external key store, see Troubleshooting an external key store in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:ConnectCustomKeyStore (IAM policy) Related operations CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores DisconnectCustomKeyStore UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.custom_key_stores.connect_custom_key_store 
@region='{{ region }}' --required 
@@json=
'{
"CustomKeyStoreId": "{{ CustomKeyStoreId }}"
}'
;
```
</TabItem>
<TabItem value="disconnect_custom_key_store">

Disconnects the custom key store from its backing key store. This operation disconnects an CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from the external key store proxy that communicates with your external key manager. This operation is part of the custom key stores feature in KMS, which combines the convenience and extensive integration of KMS with the isolation and control of a key store that you own and manage. While a custom key store is disconnected, you can manage the custom key store and its KMS keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any time. While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in cryptographic operations will fail. This action can prevent users from storing and accessing sensitive data. When you disconnect a custom key store, its ConnectionState changes to Disconnected. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation. If the operation succeeds, it returns a JSON object with no properties. Cross-account use: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. Required permissions: kms:DisconnectCustomKeyStore (IAM policy) Related operations: ConnectCustomKeyStore CreateCustomKeyStore DeleteCustomKeyStore DescribeCustomKeyStores UpdateCustomKeyStore Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.custom_key_stores.disconnect_custom_key_store 
@region='{{ region }}' --required 
@@json=
'{
"CustomKeyStoreId": "{{ CustomKeyStoreId }}"
}'
;
```
</TabItem>
</Tabs>
